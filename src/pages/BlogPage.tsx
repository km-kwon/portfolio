import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";

type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string; // "2025년 12월 7일" 같은 형태로 가정
  tags: string[];
  cover?: string; // optional image url
  likes?: number;
  comments?: number;
  category?: string; // 상단 탭 같은 분류용(옵션)
};

/**
 * ✅ 데모용 목데이터 (너는 나중에 API로 교체하면 됨)
 * cover는 실제 이미지 URL로 교체하면 카드 느낌이 스샷처럼 딱 살아남.
 */
const MOCK_ALL_POSTS: Post[] = [
  {
    id: "p1",
    slug: "ai-ux-principle",
    title: "AI 회사 가고 싶으면 이 UX 원리는 알아두세요",
    excerpt:
      "Claude나 ChatGPT를 쓰다 보면 뭔가 답변을 읽기 편하고, 화면이 넓게 느껴지고, 스크롤도 자연스럽다는 느낌이 듭니다...",
    date: "2025년 12월 7일",
    tags: ["AI", "React", "chatbot", "mvpstar", "ux"],
    cover:
      "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=1800&q=80",
    likes: 83,
    comments: 4,
    category: "frontend",
  },
  {
    id: "p2",
    slug: "frontend-performance-answer",
    title:
      "프론트엔드 면접에서 ‘성능 최적화 경험 있으세요?’ 라고 물으면, 이렇게 대답하세요",
    excerpt:
      "프론트엔드 개발을 하다 보면 성능 최적화를 피할 수 없는 순간이 옵니다. 특히 애니메이션은 성능 문제가 눈에 바로 보이기 때문에...",
    date: "2025년 12월 5일",
    tags: ["Spring", "Web Animation", "compositor", "gpu", "optimization"],
    cover:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1800&q=80",
    likes: 51,
    comments: 2,
    category: "frontend",
  },
  // 아래는 데모용으로 더 찍어낸 느낌
  ...Array.from({ length: 50 }).map((_, i) => {
    const n = i + 3;
    const tagPool = [
      "frontend",
      "React",
      "web",
      "프로토타입",
      "Backend",
      "opensource",
      "career",
      "ux",
      "performance",
      "TypeScript",
    ];
    const tags = [
      tagPool[n % tagPool.length],
      tagPool[(n + 3) % tagPool.length],
    ];
    return {
      id: `p${n}`,
      slug: `post-${n}`,
      title: `블로그 포스트 #${n}`,
      excerpt:
        "이 글은 리스트 UI/무한스크롤/카드 레이아웃 확인을 위한 더미 글입니다. 나중에 API 연동으로 바꾸면 됩니다.",
      date: "2025년 12월 1일",
      tags,
      cover:
        n % 3 === 0
          ? "https://images.unsplash.com/photo-1522252234503-e356532cafd5?auto=format&fit=crop&w=1800&q=80"
          : undefined,
      likes: (n * 7) % 120,
      comments: (n * 3) % 12,
      category: tags.includes("frontend") ? "frontend" : "etc",
    } satisfies Post;
  }),
];

const FEATURED_ROTATE_MS = 4200;
const FADE_MS = 260;

function cx(...cls: Array<string | false | null | undefined>) {
  return cls.filter(Boolean).join(" ");
}

const BlogPage: React.FC = () => {
  const navigate = useNavigate();

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
    // 태그 필터 상태에서도 featured는 “전체 기준”으로 돌리는게 보통 더 느낌이 좋음.
    // 원하면 여기에도 activeTag 적용하면 됨.
    return MOCK_ALL_POSTS.slice(0, 6);
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

  // featured에 올라간 글은 아래 리스트에서 제외하고 싶으면 여기서 제거
  const listSource = useMemo(() => {
    const featuredIds = new Set(featuredPosts.map((p) => p.id));
    return filteredAllPosts.filter((p) => !featuredIds.has(p.id));
  }, [filteredAllPosts, featuredPosts]);

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
            <h1 className="text-[32px] font-bold tracking-[-0.02em]">Blog</h1>
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
              <div className="grid md:grid-cols-[360px_1fr]">
                {/* 커버 */}
                <div className="relative h-[220px] md:h-[280px] bg-(--bg-soft)">
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

                  <div className="absolute left-5 bottom-5">
                    <span className="text-[11px] px-2.5 py-1.5 rounded-full bg-black/45 border border-white/10 text-white/90">
                      Featured
                    </span>
                  </div>
                </div>

                {/* 본문 */}
                <div className="p-6 md:p-7">
                  <h2 className="text-[22px] md:text-[24px] font-bold leading-snug tracking-[-0.02em] mb-3">
                    {featured.title}
                  </h2>

                  <p className="text-[13px] text-fg-muted leading-relaxed mb-5 line-clamp-3">
                    {featured.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {featured.tags.slice(0, 6).map((t) => (
                      <span
                        key={t}
                        className="text-[11px] px-2.5 py-1.5 rounded-full bg-(--bg-soft) border border-(--border-subtle) text-fg-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-[12px] text-fg-muted">
                    <span>{featured.date}</span>
                    <span className="flex items-center gap-2">
                      {typeof featured.comments === "number" && (
                        <span>댓글 {featured.comments}</span>
                      )}
                      {typeof featured.likes === "number" && (
                        <span>♥ {featured.likes}</span>
                      )}
                    </span>
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
              {/* 카드 상단 커버(있을 때만) */}
              {p.cover && (
                <div className="relative h-[200px] bg-(--bg-soft)">
                  <img
                    src={p.cover}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
                </div>
              )}

              <div className="p-6">
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
                  <span className="flex items-center gap-2">
                    {typeof p.comments === "number" && (
                      <span>댓글 {p.comments}</span>
                    )}
                    {typeof p.likes === "number" && <span>♥ {p.likes}</span>}
                  </span>
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
