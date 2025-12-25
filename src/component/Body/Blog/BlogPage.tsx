import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";
import { MOCK_ALL_POSTS } from "./data/postingDatas";
import type { Post } from "./data/type/postingType";

const FEATURED_ROTATE_MS = 4200;
const FADE_MS = 260;

function cx(...cls: Array<string | false | null | undefined>) {
  return cls.filter(Boolean).join(" ");
}

const BlogPage: React.FC = () => {
  const navigate = useNavigate();

  // 페이지 진입 시 스크롤을 맨 위로
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /** ------------------------------
   *  상단 필터(칩) - 스샷 느낌
   *  ------------------------------ */
  const allTagsWithCount = useMemo(() => {
    const map = new Map<string, number>();
    for (const p of MOCK_ALL_POSTS) {
      for (const t of p.tags) map.set(t, (map.get(t) ?? 0) + 1);
    }
    // "전체보기"는 별도로 처리
    return Array.from(map.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 12); // 너무 많아지면 지저분해서 상위 12개만
  }, []);

  const [activeTag, setActiveTag] = useState<string>("ALL");

  /** ------------------------------
   *  Featured 로테이션
   *  ------------------------------ */
  const featuredPosts = useMemo(() => {
    // 태그 필터 상태에서도 featured는 "전체 기준"으로 돌리는게 보통 더 느낌이 좋음.
    // 원하면 여기에도 activeTag 적용하면 됨.
    return MOCK_ALL_POSTS.slice(0, Math.min(3, MOCK_ALL_POSTS.length));
  }, []);

  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [featuredFading, setFeaturedFading] = useState(false);

  useEffect(() => {
    if (featuredPosts.length <= 1) return;

    const tick = () => {
      setFeaturedFading(true);
      window.setTimeout(() => {
        setFeaturedIndex((prev) => (prev + 1) % featuredPosts.length);
        // 다음 렌더에서 다시 fade-in 되게
        window.setTimeout(() => setFeaturedFading(false), 20);
      }, FADE_MS);
    };

    const id = window.setInterval(tick, FEATURED_ROTATE_MS);
    return () => window.clearInterval(id);
  }, [featuredPosts.length]);

  const featured = featuredPosts[featuredIndex];

  /** ------------------------------
   *  무한스크롤: 페이지네이션 흉내
   *  ------------------------------ */
  const filteredAllPosts = useMemo(() => {
    if (activeTag === "ALL") return MOCK_ALL_POSTS;
    return MOCK_ALL_POSTS.filter((p) => p.tags.includes(activeTag));
  }, [activeTag]);

  // featured에 올라간 글도 리스트에 포함
  const listSource = useMemo(() => {
    return filteredAllPosts;
  }, [filteredAllPosts]);

  const PAGE_SIZE = 10;
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [loadingMore, setLoadingMore] = useState(false);

  const visiblePosts = useMemo(() => {
    return listSource.slice(0, visibleCount);
  }, [listSource, visibleCount]);

  const hasMore = visibleCount < listSource.length;

  const selectTag = (tag: string) => {
    setActiveTag(tag);
    setVisibleCount(PAGE_SIZE);
    setLoadingMore(false); // 있으면 같이 리셋 권장
  };

  const loadMore = useCallback(async () => {
    if (!hasMore || loadingMore) return;
    setLoadingMore(true);

    // ✅ 실제 API라면 여기서 fetch하고 append하면 됨
    await new Promise((r) => setTimeout(r, 450));

    setVisibleCount((c) => Math.min(c + PAGE_SIZE, listSource.length));
    setLoadingMore(false);
  }, [hasMore, loadingMore, listSource.length]);

  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first?.isIntersecting) loadMore();
      },
      {
        root: null,
        rootMargin: "800px 0px", // 미리 로딩(체감 좋게)
        threshold: 0,
      }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [loadMore]);

  /** ------------------------------
   *  UI 핸들러
   *  ------------------------------ */
  const openPost = (p: Post) => {
    navigate(`/blog/${p.slug}`);
  };

  return (
    <div className="min-h-screen bg-(--bg-base) text-(--fg-base)">
      <div className="max-w-[1040px] mx-auto px-5 pt-[calc(var(--header-height)+32px)] pb-16">
        {/* 헤더 */}
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <h1 className="text-[32px] font-bold tracking-[-0.02em]">
              Posting
            </h1>
            <p className="text-[13px] text-fg-muted mt-2">
              Front-End를 공부하며 배운 알뜰신잡
            </p>
          </div>
        </div>

        {/* Featured (데일리 크게) */}
        {featured && (
          <section className="mb-10">
            <article
              role="button"
              tabIndex={0}
              onClick={() => openPost(featured)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") openPost(featured);
              }}
              className={cx(
                "group relative overflow-hidden rounded-3xl border bg-(--bg-elevated) border-(--border-subtle)",
                "cursor-pointer transition-colors hover:border-(--accent)",
                "focus:outline-none focus:ring-2 focus:ring-(--accent)/40",
                featuredFading ? "opacity-0" : "opacity-100",
                "transition-opacity"
              )}
              style={{ transitionDuration: `${FADE_MS}ms` }}
            >
              <div className="grid md:grid-cols-[320px_1fr]">
                {/* 커버 */}
                <div className="relative h-[250px] md:h-[250px] bg-(--bg-soft)">
                  {featured.cover ? (
                    <>
                      <img
                        src={featured.cover}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
                    </>
                  ) : (
                    <div className="absolute inset-0 bg-(--bg-soft)" />
                  )}

                  <div className="absolute left-5 top-5">
                    <span className="text-[11px] px-2.5 py-1.5 rounded-full bg-black/45 border border-white/10 text-white/90">
                      Today's
                    </span>
                  </div>
                </div>

                {/* 본문 */}
                <div className="p-5 h-full flex flex-col justify-between">
                  <h2 className="text-[22px] md:text-[24px] font-bold leading-snug tracking-[-0.02em] mb-3">
                    {featured.title}
                  </h2>

                  <p className="text-[13px] text-fg-muted leading-relaxed mb-5 line-clamp-3">
                    {featured.excerpt}
                  </p>
                  <div className="flex flex-col text-[12px] text-fg-muted w-full">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {featured.tags.slice(0, 6).map((t) => (
                        <span
                          key={t}
                          className="text-[11px] px-2.5 py-1.5 rounded-full bg-(--bg-soft) border border-(--border-subtle) text-fg-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <span>{featured.date}</span>
                  </div>
                </div>
              </div>
            </article>
          </section>
        )}

        {/* 상단 태그/카테고리 칩 (스샷 느낌) */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            type="button"
            onClick={() => selectTag("ALL")}
            className={cx(
              "text-[12px] px-3 py-1.5 rounded-full border transition-colors",
              activeTag === "ALL"
                ? "bg-(--bg-elevated) border-(--accent) text-(--fg-base)"
                : "bg-(--bg-soft) border-(--border-subtle) text-fg-muted hover:border-(--accent)"
            )}
          >
            전체보기 ({filteredAllPosts.length})
          </button>

          {allTagsWithCount.map(([t, count]) => (
            <button
              key={t}
              type="button"
              onClick={() => selectTag("ALL")}
              className={cx(
                "text-[12px] px-3 py-1.5 rounded-full border transition-colors",
                activeTag === t
                  ? "bg-(--bg-elevated) border-(--accent) text-(--fg-base)"
                  : "bg-(--bg-soft) border-(--border-subtle) text-fg-muted hover:border-(--accent)"
              )}
            >
              {t} ({count})
            </button>
          ))}
        </div>

        {/* 리스트 */}
        <section className="grid gap-6">
          {visiblePosts.map((p) => (
            <article
              key={p.id}
              onClick={() => openPost(p)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") openPost(p);
              }}
              className={cx(
                "group overflow-hidden rounded-2xl border bg-(--bg-elevated) border-(--border-subtle)",
                "cursor-pointer transition-colors hover:border-(--accent)",
                "focus:outline-none focus:ring-2 focus:ring-(--accent)/40"
              )}
            >
              <div className="grid md:grid-cols-[240px_1fr] md:h-[200px]">
                {/* 왼쪽 커버(있을 때만) */}
                {p.cover && (
                  <div className="relative h-[180px] md:h-[200px] bg-(--bg-soft)">
                    <img
                      src={p.cover}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/55 via-black/15 to-transparent" />
                  </div>
                )}

                <div className="p-6 md:overflow-hidden">
                  <h3 className="text-[20px] font-semibold leading-snug mb-2">
                    {p.title}
                  </h3>

                  <p className="text-[13px] text-fg-muted leading-relaxed mb-4 line-clamp-2">
                    {p.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tags.slice(0, 8).map((t) => (
                      <span
                        key={t}
                        className="text-[11px] px-2.5 py-1.5 rounded-full bg-(--bg-soft) border border-(--border-subtle) text-fg-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-[12px] text-fg-muted">
                    <span>{p.date}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}

          {/* 로딩/센티넬 */}
          <div ref={sentinelRef} className="h-10" />

          {loadingMore && (
            <div className="py-6 text-center text-[13px] text-fg-muted">
              불러오는 중...
            </div>
          )}

          {!hasMore && (
            <div className="py-10 text-center text-[13px] text-fg-muted">
              더 이상 글이 없습니다.
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default BlogPage;
