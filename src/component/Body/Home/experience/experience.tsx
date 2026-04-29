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
  return shuffled.slice(0, 3);
};

const BlogSection: React.FC = () => {
  const navigate = useNavigate();

  // useState의 초기값으로만 랜덤 선택 (한 번만 실행됨)
  const [randomPosts] = useState(getRandomPosts);
  const featuredPost = randomPosts[0];
  const logPosts = randomPosts.slice(1);

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
      <div className="cinematic-section-rail mb-5 flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.22em] text-fg-muted">
        <span>Scene 08 / Research Terminal</span>
        <div className="hidden h-px flex-1 bg-(--border-subtle) md:block">
          <span className="cinematic-progress block h-full max-w-[32%] bg-(--accent)" />
        </div>
        <span className="text-(--accent)">Reading Archive</span>
      </div>
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

      <div className="research-terminal">
        <div className="research-terminal-toolbar">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-(--accent)" />
            <span>archive.feed</span>
          </div>
          <div className="hidden items-center gap-4 sm:flex">
            <span>{MOCK_ALL_POSTS.length} entries</span>
            <span>{randomPosts.length} selected</span>
            <button
              type="button"
              onClick={handleViewAllClick}
              className="pointer-events-auto text-(--accent) transition-colors hover:text-(--accent-hover)"
            >
              open all
            </button>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.7fr)]">
          {featuredPost && (
            <article
              className="research-media-card blog-orbit-card group cursor-pointer rounded-xl border border-(--border-subtle) bg-(--bg-elevated)"
              onPointerMove={handleCardPointerMove}
              onClick={() => handlePostClick(featuredPost.slug)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ")
                  handlePostClick(featuredPost.slug);
              }}
            >
              <div className="relative min-h-[360px] overflow-hidden">
                  {featuredPost.cover && (
                    <img
                      src={featuredPost.cover}
                      alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-80 grayscale-[45%] saturate-[0.85] transition-all duration-700 group-hover:scale-105 group-hover:opacity-95 group-hover:grayscale-0 group-hover:saturate-100"
                      loading="lazy"
                    />
                  )}
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.82),rgba(0,0,0,0.42)_52%,rgba(0,0,0,0.18)),linear-gradient(0deg,rgba(0,0,0,0.72),transparent_56%)]" />
                <div className="research-scanlines absolute inset-0" />

                <div className="relative z-10 flex min-h-[360px] flex-col justify-between p-6">
                  <div className="flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.18em] text-white/70">
                    <span>Featured Reading</span>
                    <span>{featuredPost.date}</span>
                  </div>

                  <div>
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-(--accent)">
                      <span className="h-1.5 w-1.5 rounded-full bg-(--accent)" />
                      Log Entry 01
                    </div>
                    <h3 className="max-w-[640px] text-[clamp(28px,4.4vw,46px)] font-bold leading-[1.02] text-white">
                      {featuredPost.title}
                    </h3>
                    <p className="mt-4 max-w-[560px] text-[13px] leading-[1.75] text-white/72 line-clamp-3">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {featuredPost.tags.slice(0, 5).map((tag) => (
                        <span
                          key={tag}
                          className="blog-tag rounded-full border border-white/15 bg-white/8 px-2.5 py-1 text-[11px] text-white/82"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="translate-x-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/70 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                      read note →
                    </span>
                  </div>
                </div>
              </div>
            </article>
          )}

          <div className="grid gap-4">
            {logPosts.map((post, index) => (
              <article
                key={post.id}
                className="research-media-card research-media-card-small blog-orbit-card group cursor-pointer rounded-xl border border-(--border-subtle) bg-(--bg-elevated)"
                onPointerMove={handleCardPointerMove}
                onClick={() => handlePostClick(post.slug)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ")
                    handlePostClick(post.slug);
                }}
              >
                <div className="relative min-h-[172px] overflow-hidden">
                  {post.cover && (
                    <img
                      src={post.cover}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover opacity-78 grayscale-[45%] saturate-[0.85] transition-all duration-700 group-hover:scale-105 group-hover:opacity-95 group-hover:grayscale-0 group-hover:saturate-100"
                      loading="lazy"
                    />
                  )}
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.82),rgba(0,0,0,0.44)_58%,rgba(0,0,0,0.18)),linear-gradient(0deg,rgba(0,0,0,0.74),transparent_62%)]" />
                  <div className="research-scanlines absolute inset-0" />

                  <div className="relative z-10 flex min-h-[172px] flex-col justify-between p-5">
                    <div className="flex items-center justify-between gap-4 font-mono text-[9px] uppercase tracking-[0.18em] text-white/70">
                      <span>Log Entry {String(index + 2).padStart(2, "0")}</span>
                      <span>{post.date}</span>
                    </div>

                    <div>
                      <h3 className="max-w-[360px] truncate text-[21px] font-bold leading-[1.08] text-white">
                        {post.title}
                      </h3>
                      <p className="mt-2 max-w-[340px] text-[12px] leading-[1.65] text-white/72 line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="blog-tag rounded-full border border-white/15 bg-white/8 px-2 py-0.5 text-[10px] text-white/82"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
