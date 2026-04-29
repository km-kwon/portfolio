// src/BlogSection.tsx
import React, { useState } from "react";
import type { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { MOCK_ALL_POSTS } from "../../Blog/data/postingDatas";
import {
  sectionHeaderBase,
  sectionTitleClass,
} from "../../../../styles/tokens";
import SectionMarker from "../../../common/SectionMarker";

const sectionSubTitleClickable =
  "text-[14px] text-fg-muted leading-relaxed cursor-pointer hover:text-(--accent) transition-colors duration-300";

// 컴포넌트 외부에서 랜덤 선택 (한 번만 실행)
const getRandomPosts = () => {
  const shuffled = [...MOCK_ALL_POSTS].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 2);
};

const BlogSection: React.FC = () => {
  const navigate = useNavigate();

  // useState의 초기값으로만 랜덤 선택 (한 번만 실행됨)
  const [randomPosts] = useState(getRandomPosts);

  const handlePostClick = (slug: string) => {
    navigate(`/blog/${slug}`);
  };
  const handleViewAllClick = () => {
    navigate("/blog");
  };

  const handleCardPointerMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    event.currentTarget.style.setProperty("--spot-x", `${x}%`);
    event.currentTarget.style.setProperty("--spot-y", `${y}%`);
  };

  return (
    <section id="experience" className="mb-16">
      <SectionMarker number="08" label="Blog" />
      <div className={sectionHeaderBase}>
        <div className="w-full">
          <div className="w-full flex justify-between">
            <h2 className={sectionTitleClass}>기술 블로그</h2>

            {/* 블로그 전체 보기 버튼 */}
            <p className={sectionSubTitleClickable} onClick={handleViewAllClick}>
              포스팅 전체 보기 →
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-4">
        {randomPosts.map((post) => (
          <article
            key={post.id}
            className="blog-orbit-card group rounded-2xl border bg-(--bg-elevated) border-(--border-subtle) cursor-pointer
                       transition-all duration-300 ease-out
                       hover:border-(--accent-border) hover:-translate-y-1
                       [html[data-theme='light']_&]:shadow-[0_1px_3px_rgba(0,0,0,0.04)]
                       [html[data-theme='light']_&]:hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]
                       focus:outline-none focus:ring-2 focus:ring-(--accent)/30"
            onPointerMove={handleCardPointerMove}
            onClick={() => handlePostClick(post.slug)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ")
                handlePostClick(post.slug);
            }}
          >
            <div className="grid md:grid-cols-[240px_1fr] md:h-[200px]">
              {/* 왼쪽 커버(있을 때만) */}
              {post.cover && (
                <div className="relative h-[180px] md:h-[200px] bg-(--bg-soft)">
                  <img
                    src={post.cover}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover opacity-90 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t md:bg-linear-to-r from-black/55 via-black/15 to-transparent" />
                </div>
              )}

              <div className="relative z-10 p-6 md:overflow-hidden">
                <div className="mb-3 flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.18em] text-(--accent)">
                  <span className="h-px w-8 bg-(--accent)" />
                  Reading Note
                </div>
                <h3 className="text-[20px] font-semibold leading-snug mb-2 line-clamp-1">
                  <span className="bg-linear-to-r from-(--accent) to-(--accent) bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 group-hover:bg-[length:100%_1px]">
                    {post.title}
                  </span>
                </h3>

                <p className="text-[13px] text-fg-muted leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 8).map((tag) => (
                    <span
                      key={tag}
                    className="blog-tag text-[11px] px-2.5 py-1 rounded-full bg-(--accent-subtle) border border-(--accent-border) text-(--accent)"
                  >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-[12px] text-fg-muted">
                  <span>{post.date}</span>
                  <span className="translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    읽으러 가기 →
                  </span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
