import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import GitHubSlugger from "github-slugger";
import { extractToc } from "./data/util/tocParser";
import { useScrollSpy } from "./data/util/scrollHook";

const mdModules = import.meta.glob<string>("../posts/**/*.md", {
  eager: true,
  as: "raw",
});

function pickMarkdownBySlug(slug: string) {
  // 예: 파일명이 slug.md 라는 가정
  const hitKey = Object.keys(mdModules).find((k) => k.endsWith(`/${slug}.md`));
  return hitKey ? mdModules[hitKey] : null;
}

const PostPage: React.FC = () => {
  const { slug = "" } = useParams();
  const markdown =
    pickMarkdownBySlug(slug) ?? "# Not Found\n포스트가 없습니다.";

  const toc = useMemo(() => extractToc(markdown, [2, 3]), [markdown]);
  const activeId = useScrollSpy(toc.map((t) => t.id));

  // ✅ heading id를 toc와 동일한 규칙으로 부여 (slugger reset 중요)
  const slugger = useMemo(() => new GitHubSlugger(), []);

  return (
    <div className="min-h-screen bg-(--bg-base) text-(--fg-base)">
      <div className="max-w-[1300px] mx-auto px-5 pt-[calc(var(--header-height)+28px)] pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_280px] gap-10">
          {/* LEFT: 본문 */}
          <article className="min-w-0">
            <div className="rounded-3xl border border-(--border-subtle) bg-(--bg-elevated) p-7 md:p-10">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ children }) => (
                    <h1 className="text-[34px] md:text-[40px] font-bold tracking-[-0.03em] leading-tight mb-6">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => {
                    const text = String(children);
                    const id = slugger.slug(text);
                    return (
                      <h2
                        id={id}
                        className="scroll-mt-[calc(var(--header-height)+24px)] text-[26px] md:text-[30px] font-bold tracking-[-0.02em] mt-12 mb-5"
                      >
                        {children}
                      </h2>
                    );
                  },
                  h3: ({ children }) => {
                    const text = String(children);
                    const id = slugger.slug(text);
                    return (
                      <h3
                        id={id}
                        className="scroll-mt-[calc(var(--header-height)+24px)] text-[18px] md:text-[20px] font-semibold mt-9 mb-3"
                      >
                        {children}
                      </h3>
                    );
                  },
                  p: ({ children }) => (
                    <p className="text-[15px] leading-[1.9] text-(--fg-base) mb-5">
                      {children}
                    </p>
                  ),
                  a: ({ href, children }) => (
                    <a
                      href={href}
                      className="underline underline-offset-4 text-(--fg-base) hover:text-(--accent)"
                      target={href?.startsWith("http") ? "_blank" : undefined}
                      rel={href?.startsWith("http") ? "noreferrer" : undefined}
                    >
                      {children}
                    </a>
                  ),
                  code: ({ children }) => (
                    <code className="px-1.5 py-1 rounded-md bg-(--bg-soft) border border-(--border-subtle) text-[13px]">
                      {children}
                    </code>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-2 border-(--border-subtle) pl-4 my-6 text-fg-muted">
                      {children}
                    </blockquote>
                  ),
                }}
              >
                {markdown}
              </ReactMarkdown>
            </div>
          </article>

          {/* RIGHT: 네비게이션(TOC) */}
          <aside className="hidden lg:block">
            <div className="sticky top-[calc(var(--header-height)+24px)]">
              <div className="rounded-2xl border border-(--border-subtle) bg-(--bg-elevated) p-4">
                <div className="text-[12px] text-fg-muted mb-3">
                  On this page
                </div>

                <nav className="flex flex-col gap-1">
                  {toc.map((item) => {
                    const isActive = item.id === activeId;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => {
                          document.getElementById(item.id)?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                        }}
                        className={[
                          "text-left rounded-lg px-2 py-1.5 transition-colors",
                          "hover:bg-(--bg-soft)",
                          item.depth === 3 ? "pl-6 text-[12px]" : "text-[13px]",
                          isActive
                            ? "bg-(--bg-soft) text-(--fg-base) border border-(--border-subtle)"
                            : "text-fg-muted",
                        ].join(" ")}
                      >
                        {item.text}
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
