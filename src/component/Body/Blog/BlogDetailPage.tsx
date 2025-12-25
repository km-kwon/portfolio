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
    // @ts-expect-error - ReactNode tree
    return getPlainText(node.props?.children);
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

const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // ✅ slugger는 memo 금지 (매 렌더 초기화)
  const renderSlug = createSlugger();

  const post = MOCK_ALL_POSTS.find((p) => p.slug === slug);

  // TOC 생성 (React Compiler가 추론한 의존성 사용)
  const toc = useMemo(() => {
    if (!post?.content) return [];
    return extractToc(post.content, 1, 3);
  }, [post]);

  const content = post?.content;

  const [activeId, setActiveId] = useState<string | undefined>();
  const isScrollingRef = React.useRef(false);
  const initializedRef = React.useRef(false);

  // 페이지 진입/slug 변경 시 스크롤 맨 위로 이동 & 초기화
  useEffect(() => {
    window.scrollTo(0, 0);
    initializedRef.current = false;
  }, [slug]);

  // TOC가 생성되면 첫 번째 항목을 활성화 (한 번만)
  useEffect(() => {
    if (toc.length > 0 && !initializedRef.current) {
      initializedRef.current = true;
      setTimeout(() => {
        setActiveId(toc[0].id);
      }, 100);
    }
  }, [toc]);

  const handleTocClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    // 스크롤 중임을 표시
    isScrollingRef.current = true;

    // ✅ 클릭 즉시 강조 반영
    setActiveId(id);

    // URL hash 업데이트
    history.replaceState(null, "", `#${id}`);

    // 스크롤 (헤더 높이 + 여유 고려)
    const headerHeight = 80;
    const offset = 24;
    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerHeight - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    // 스크롤이 끝나면 observer 다시 활성화 (약간의 딜레이)
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 1000);
  };

  // 스크롤 위치에 따라 active heading 추적
  useEffect(() => {
    if (!toc.length) return;

    const ids = toc.map((t) => t.id);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        // 스크롤 중이면 observer 무시
        if (isScrollingRef.current) return;

        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              (a.target as HTMLElement).offsetTop -
              (b.target as HTMLElement).offsetTop
          );

        if (visible[0]) {
          setActiveId((visible[0].target as HTMLElement).id);
        }
      },
      {
        root: null,
        rootMargin: "-80px 0px -70% 0px",
        threshold: [0, 0.1, 0.5, 1],
      }
    );

    elements.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [toc]);

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
      {/* 메인 컨텐츠 (중앙 정렬) */}
      <div className="mx-auto max-w-[780px] px-5 md:px-8 pt-[calc(var(--header-height)+48px)] pb-16">
        <article className="w-full">
          {/* 뒤로가기 */}
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

          {/* 헤더 */}
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

          {/* 커버 이미지 */}
          {post.cover && (
            <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden mb-10 bg-(--bg-soft)">
              <img
                src={post.cover}
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          )}

          {/* 마크다운 콘텐츠 */}
          <div className="prose prose-invert max-w-none">
            {content ? (
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ children, ...props }) => {
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
                  h2: ({ children, ...props }) => {
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
                  h3: ({ children, ...props }) => {
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
                }}
              >
                {content}
              </ReactMarkdown>
            ) : (
              <p className="text-fg-muted">콘텐츠가 없습니다.</p>
            )}
          </div>
        </article>
      </div>

      {/* 우측 TOC (화면 고정) */}
      <TocSidebar toc={toc} activeId={activeId} onClickItem={handleTocClick} />
    </div>
  );
};

export default BlogDetailPage;
