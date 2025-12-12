import React from "react";

const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-[1040px] mx-auto px-5 pt-[calc(var(--header-height)+32px)] pb-16">
        <h1 className="text-[32px] font-bold mb-8">Blog</h1>

        <div className="grid gap-6">
          {/* 블로그 포스트 카드들이 들어갈 자리 */}
          <article className="p-6 rounded-2xl border border-(--border-subtle) bg-(--bg-elevated) hover:border-(--accent) transition-colors duration-200 cursor-pointer">
            <h2 className="text-[20px] font-semibold mb-2">첫 번째 블로그 포스트</h2>
            <p className="text-[13px] text-fg-muted mb-4">
              블로그 포스트 내용 미리보기...
            </p>
            <div className="flex gap-2">
              <span className="text-[11px] px-2.5 py-1.5 rounded-full bg-(--bg-soft) border border-(--border-subtle) text-fg-muted">
                React
              </span>
              <span className="text-[11px] px-2.5 py-1.5 rounded-full bg-(--bg-soft) border border-(--border-subtle) text-fg-muted">
                TypeScript
              </span>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;