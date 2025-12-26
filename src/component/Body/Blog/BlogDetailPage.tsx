import React, { useEffect, useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MOCK_ALL_POSTS } from "./data/postingDatas";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type TocItem = {
  id: string;
  text: string;
  level: number; // 1..6
};

function getPlainText(node: React.ReactNode): string {
  if (node == null) return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(getPlainText).join("");
  if (typeof node === "object" && node && "props" in node) {
    return getPlainText((node as any).props?.children);
  }
  return "";
}

function createSlugger() {
  const counts = new Map<string, number>();

  const baseSlug = (text: string) =>
    text
      .trim()
      .toLowerCase()
      .replace(/[^\p{L}\p{N}\s-]/gu, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");

  return (text: string) => {
    const base = baseSlug(text) || "section";
    const n = counts.get(base) ?? 0;
    counts.set(base, n + 1);
    return n === 0 ? base : `${base}-${n}`;
  };
}

function extractToc(markdown: string, minLevel = 1, maxLevel = 3): TocItem[] {
  const slug = createSlugger();
  const lines = markdown.split("\n");

  let inCode = false;
  const out: TocItem[] = [];

  for (const raw of lines) {
    const line = raw.trimEnd();

    // code fence toggle
    if (line.trimStart().startsWith("```")) {
      inCode = !inCode;
      continue;
    }
    if (inCode) continue;

    const m = /^(#{1,6})\s+(.+?)\s*$/.exec(line);
    if (!m) continue;

    const level = m[1].length;
    if (level < minLevel || level > maxLevel) continue;

    const text = m[2]
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .replace(/[*_`]/g, "")
      .trim();

    const id = slug(text);
    out.push({ id, text, level });
  }
  return out;
}

const TocSidebar: React.FC<{
  toc: TocItem[];
  activeId?: string;
  onClickItem: (id: string) => void;
}> = ({ toc, activeId, onClickItem }) => {
  if (!toc.length) return null;

  return (
    <aside className="fixed right-4 2xl:right-8 top-[calc(var(--header-height)+48px)] hidden xl:block w-56 2xl:w-60 h-[calc(100vh-var(--header-height)-96px)] overflow-y-auto overflow-x-hidden">
      <div className="border-l border-(--border-subtle) pl-4 pr-2">
        <nav aria-label="Table of contents">
          <ul className="space-y-2">
            {toc.map((item) => {
              const isActive = item.id === activeId;
              const indent =
                item.level === 1 ? "pl-0" : item.level === 2 ? "pl-3" : "pl-6";

              return (
                <li key={item.id} className={indent}>
                  <button
                    type="button"
                    onClick={() => onClickItem(item.id)}
                    className={[
                      "group relative block w-full text-left",
                      "text-[13px] leading-[1.65]",
                      "transition-colors duration-200",
                      "focus:outline-none focus-visible:ring-2 focus-visible:ring-(--accent)/60 focus-visible:ring-offset-2 focus-visible:ring-offset-(--bg-base)",
                      isActive
                        ? "text-(--fg-base) font-semibold"
                        : "text-fg-muted hover:text-(--fg-base)",
                    ].join(" ")}
                  >
                    <span
                      className={[
                        "absolute -left-[22px] top-[9px] h-1.5 w-1.5 rounded-full",
                        "bg-(--fg-base)",
                        "transition-opacity duration-200",
                        isActive
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-60",
                      ].join(" ")}
                    />
                    {item.text}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

type Post = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  cover?: string;
  content?: string;
};

const CircleIcon: React.FC<{ dir: "left" | "right" }> = ({ dir }) => (
  <span
    className={[
      "shrink-0 w-11 h-11 rounded-full flex items-center justify-center",
      "border border-(--accent)/70 text-(--accent)",
      "bg-transparent group-hover:bg-(--accent)/10",
      "transition-colors duration-200",
    ].join(" ")}
  >
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      {dir === "left" ? (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      ) : (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      )}
    </svg>
  </span>
);

const CardShell: React.FC<{
  children: React.ReactNode;
  align: "left" | "right";
  onClick: () => void;
}> = ({ children, align, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={[
      "group relative w-full overflow-hidden rounded-2xl",
      "border border-white/10",
      "bg-white/5 hover:bg-white/8",
      "transition-colors duration-200",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-(--accent)/60 focus-visible:ring-offset-2 focus-visible:ring-offset-(--bg-base)",
      align === "left" ? "text-left" : "text-right",
    ].join(" ")}
  >
    {/* hover 시 은은한 띠 그라데이션 */}
    <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
      <span className="absolute inset-0 bg-gradient-to-r from-(--accent)/0 via-(--accent)/10 to-(--accent)/0" />
    </span>

    <div className="relative p-6">{children}</div>
  </button>
);

const PostNavigation: React.FC<{
  prevPost: Post | null;
  nextPost: Post | null;
  onNavigate: (slug: string) => void;
}> = ({ prevPost, nextPost, onNavigate }) => {
  if (!prevPost && !nextPost) return null;

  return (
    <nav className="mt-16 pt-8 border-t border-(--border-subtle)">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 이전 포스트 */}
        <div className="md:col-span-1">
          {prevPost ? (
            <CardShell align="left" onClick={() => onNavigate(prevPost.slug)}>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-[12px] font-semibold text-fg-muted mb-1">
                    이전 포스트
                  </div>
                  <h3 className="text-[18px] font-bold text-(--fg-base) truncate">
                    {prevPost.title}
                  </h3>
                </div>
                <CircleIcon dir="left" />
              </div>
            </CardShell>
          ) : (
            <div className="w-full h-[88px] md:h-full" />
          )}
        </div>

        {/* 다음 포스트 */}
        <div className="md:col-span-1">
          {nextPost ? (
            <CardShell align="right" onClick={() => onNavigate(nextPost.slug)}>
              <div className="flex items-center justify-between gap-4">
                <CircleIcon dir="right" />
                <div className="min-w-0">
                  <div className="text-[12px] font-semibold text-fg-muted mb-1">
                    다음 포스트
                  </div>
                  <h3 className="text-[18px] font-bold text-(--fg-base) truncate">
                    {nextPost.title}
                  </h3>
                </div>
              </div>
            </CardShell>
          ) : (
            <div className="w-full h-[88px] md:h-full" />
          )}
        </div>
      </div>
    </nav>
  );
};

/**
 * ✅ 마크다운 영역을 분리 + memo
 * - activeId 변경으로 BlogDetailPage가 리렌더 되더라도
 *   content가 안 바뀌면 ReactMarkdown은 리렌더 안 함 → 깜빡임/지연 감소
 */
const MarkdownContent = React.memo(function MarkdownContent({
  content,
}: {
  content: string;
}) {
  // content가 바뀔 때만 새 slugger 생성
  // (memo 덕분에 activeId 변경으로는 이 컴포넌트가 리렌더되지 않음)
  const renderSlug = useMemo(() => createSlugger(), [content]);
  const remarkPlugins = useMemo(() => [remarkGfm], []);

  const components = useMemo(
    () => ({
      h1: ({ children, ...props }: any) => {
        const text = getPlainText(children);
        const id = renderSlug(text);
        return (
          <h1
            id={id}
            className="scroll-mt-[calc(var(--header-height)+24px)]"
            {...props}
          >
            {children}
          </h1>
        );
      },
      h2: ({ children, ...props }: any) => {
        const text = getPlainText(children);
        const id = renderSlug(text);
        return (
          <h2
            id={id}
            className="scroll-mt-[calc(var(--header-height)+24px)]"
            {...props}
          >
            {children}
          </h2>
        );
      },
      h3: ({ children, ...props }: any) => {
        const text = getPlainText(children);
        const id = renderSlug(text);
        return (
          <h3
            id={id}
            className="scroll-mt-[calc(var(--header-height)+24px)]"
            {...props}
          >
            {children}
          </h3>
        );
      },
    }),
    [renderSlug]
  );

  return (
    <ReactMarkdown remarkPlugins={remarkPlugins} components={components}>
      {content}
    </ReactMarkdown>
  );
});

const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // ✅ post와 content를 한번에 계산
  const post = useMemo(
    () => MOCK_ALL_POSTS.find((p) => p.slug === slug),
    [slug]
  );
  const content = useMemo(() => post?.content ?? "", [post]);

  // ✅ content 기준으로 TOC 생성
  const toc = useMemo(() => {
    if (!content) return [];
    return extractToc(content, 1, 3);
  }, [content]);

  // ✅ 이전/다음 게시글 계산
  const { prevPost, nextPost } = useMemo(() => {
    const currentIndex = MOCK_ALL_POSTS.findIndex((p) => p.slug === slug);
    if (currentIndex === -1) return { prevPost: null, nextPost: null };

    return {
      prevPost: currentIndex > 0 ? MOCK_ALL_POSTS[currentIndex - 1] : null,
      nextPost:
        currentIndex < MOCK_ALL_POSTS.length - 1
          ? MOCK_ALL_POSTS[currentIndex + 1]
          : null,
    };
  }, [slug]);

  const [activeId, setActiveId] = useState<string | undefined>();
  const isScrollingRef = React.useRef(false);

  // 페이지 진입/slug 변경 시 스크롤 맨 위로 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const handleTocClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    isScrollingRef.current = true;

    // ✅ 같은 값이면 setState 안 해서 불필요 리렌더 방지
    setActiveId((prev) => (prev === id ? prev : id));

    history.replaceState(null, "", `#${id}`);

    const headerHeight =
      parseFloat(
        getComputedStyle(document.documentElement)
          .getPropertyValue("--header-height")
          .trim()
      ) || 80;
    const offset = 24;

    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
    const target = elementPosition - headerHeight - offset;

    window.scrollTo({ top: target, behavior: "smooth" });

    // ✅ “목표 근처로 몇 프레임 안정화”될 때까지 락 유지 (깜빡임 감소)
    const start = performance.now();
    let stableFrames = 0;

    const tick = () => {
      const y = window.scrollY;

      if (Math.abs(y - target) < 2) stableFrames += 1;
      else stableFrames = 0;

      const timedOut = performance.now() - start > 2200;

      if (stableFrames >= 3 || timedOut) {
        isScrollingRef.current = false;
        return;
      }
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  // ✅ ScrollSpy: 현재 섹션(헤더 아래 기준으로 지나간 마지막 heading)을 active로
  useEffect(() => {
    if (!toc.length) return;

    const getHeaderHeight = () => {
      const v = getComputedStyle(document.documentElement)
        .getPropertyValue("--header-height")
        .trim();
      const n = parseFloat(v);
      return Number.isFinite(n) ? n : 80;
    };

    const offset = 24;
    let raf = 0;

    const update = () => {
      raf = 0;
      if (isScrollingRef.current) return;

      const headerHeight = getHeaderHeight();
      const y = window.scrollY + headerHeight + offset + 1;

      let currentId = toc[0]?.id;

      for (const item of toc) {
        const el = document.getElementById(item.id);
        if (!el) continue;

        if (el.offsetTop <= y) currentId = item.id;
        else break;
      }

      // ✅ 같은 값이면 setState 안 함 → sidebar 깜빡임/리렌더 최소화
      setActiveId((prev) => (prev === currentId ? prev : currentId));
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [toc, slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-(--bg-base) text-(--fg-base) flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-[32px] font-bold mb-4">
            포스트를 찾을 수 없습니다
          </h1>
          <button
            onClick={() => navigate("/blog")}
            className="px-4 py-2 rounded-full border border-(--border-subtle) bg-white/5 hover:bg-white/10 transition-colors"
          >
            블로그로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-(--bg-base) text-(--fg-base) overflow-x-hidden">
      <div className="mx-auto max-w-[780px] px-5 md:px-8 pt-[calc(var(--header-height)+48px)] pb-16">
        <article className="w-full">
          <button
            onClick={() => navigate("/blog")}
            className="relative z-10 mb-5 text-[13px] text-fg-muted hover:text-fg transition-colors flex items-center gap-2"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            목록으로
          </button>

          <div className="mb-10">
            <h1 className="text-[36px] md:text-[42px] font-bold leading-tight mb-4">
              {post.title}
            </h1>

            <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2.5 py-1.5 rounded-full bg-(--bg-soft) border border-(--border-subtle) text-fg-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="text-[13px] text-fg-muted whitespace-nowrap md:text-right">
                {post.date}
              </div>
            </div>
          </div>

          {post.cover && (
            <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden mb-10 bg-(--bg-soft)">
              <img
                src={post.cover}
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          )}

          <div className="prose prose-invert max-w-none">
            {content ? (
              <MarkdownContent content={content} />
            ) : (
              <p className="text-fg-muted">콘텐츠가 없습니다.</p>
            )}
          </div>

          {/* 이전/다음 게시글 네비게이션 */}
          <PostNavigation
            prevPost={prevPost}
            nextPost={nextPost}
            onNavigate={(slug) => navigate(`/blog/${slug}`)}
          />
        </article>
      </div>

      <TocSidebar toc={toc} activeId={activeId} onClickItem={handleTocClick} />
    </div>
  );
};

export default BlogDetailPage;
