import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MOCK_ALL_POSTS } from "../component/Body/Blog/data/postingDatas";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // 페이지 진입 시 스크롤을 맨 위로
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const post = MOCK_ALL_POSTS.find((p) => p.slug === slug);

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
    <div className="min-h-screen bg-(--bg-base) text-(--fg-base)">
      {/* 헤더 아래 전체 너비 그라데이션 오버레이 */}
      <div
        className="fixed inset-x-0 top-(--header-height) h-24 pointer-events-none z-10"
        style={{
          background:
            "linear-gradient(to bottom, var(--bg) 0%, transparent 100%)",
        }}
      />

      <article className="relative max-w-[800px] mx-auto px-5 pt-[calc(var(--header-height)+48px)] pb-16">
        {/* 뒤로가기 버튼 */}
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
                  className="text-[14px] px-4 text-green-300 py-1.5 rounded-full bg-(--bg-soft) border border-(--border-subtle) text-fg-muted"
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
          {post.content ? (
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          ) : (
            <p className="text-fg-muted">콘텐츠가 없습니다.</p>
          )}
        </div>
      </article>
    </div>
  );
};

export default BlogDetailPage;
