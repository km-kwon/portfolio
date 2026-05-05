import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BLOG_POSTS, type WireBlogPost } from "../data";

const FEATURED_ROTATION_INTERVAL = 5000;
const FEATURED_FADE_DURATION = 500;

const BlogPage: React.FC = () => {
  const featured = BLOG_POSTS.find((p) => p.featured) ?? BLOG_POSTS[0];
  const rest = BLOG_POSTS.filter((p) => p.slug !== featured?.slug);
  const tags = useMemo(
    () => ["All", ...Array.from(new Set(BLOG_POSTS.map((p) => p.tag)))],
    []
  );
  const [filter, setFilter] = useState<string>("All");
  const visible = filter === "All" ? rest : rest.filter((p) => p.tag === filter);

  return (
    <div className="page-fade">
      <div className="wf-marker">
        <span className="num">06</span>
        <span>Writing · {BLOG_POSTS.length} posts</span>
        <span className="bar" />
      </div>

      <h1
        className="reveal"
        style={{
          fontFamily: "var(--serif)", fontSize: "clamp(28px, 3.2vw, 44px)",
          fontWeight: 400, letterSpacing: "-0.015em",
          margin: "0 0 32px", lineHeight: 1.15,
        }}
      >
        <em style={{ color: "var(--accent-hi)", fontStyle: "italic" }}>Words</em>,
        <br />
        <span style={{ color: "var(--fg-muted)" }}>not just code.</span>
      </h1>

      <FeaturedCard posts={BLOG_POSTS} />

      <div
        className="reveal d2"
        style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}
      >
        {tags.map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            style={{
              fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.06em",
              padding: "7px 14px", borderRadius: 999,
              border: filter === t ? "1px solid var(--accent)" : "1px solid var(--border)",
              background: filter === t ? "var(--accent-soft)" : "transparent",
              color: filter === t ? "var(--accent-hi)" : "var(--fg-muted)",
              transition: "all .25s", cursor: "pointer",
            }}
          >
            {t}
          </button>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: 16,
        }}
      >
        {visible.map((post, i) => (
          <BlogPostCard key={post.slug} post={post} index={i} />
        ))}
      </div>
    </div>
  );
};

interface FeaturedCardProps {
  posts: WireBlogPost[];
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({ posts }) => {
  const [index, setIndex] = useState(0);
  const [hover, setHover] = useState(false);
  const [fading, setFading] = useState(false);
  const fadeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (hover || posts.length < 2) return;

    const intervalId = setInterval(() => {
      setFading(true);
      fadeTimeoutRef.current = setTimeout(() => {
        setIndex((prev) => {
          if (posts.length === 1) return 0;
          let next = prev;
          while (next === prev) {
            next = Math.floor(Math.random() * posts.length);
          }
          return next;
        });
        setFading(false);
      }, FEATURED_FADE_DURATION);
    }, FEATURED_ROTATION_INTERVAL);

    return () => {
      clearInterval(intervalId);
      if (fadeTimeoutRef.current) {
        clearTimeout(fadeTimeoutRef.current);
        fadeTimeoutRef.current = null;
      }
    };
  }, [hover, posts.length]);

  const post = posts[index];
  if (!post) return null;

  return (
    <Link
      to={`/blog/${post.slug}`}
      className="reveal d1"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative", display: "block",
        minHeight: 240,
        marginBottom: 56, borderRadius: 18,
        border: "1px solid var(--accent)",
        background: "linear-gradient(135deg, var(--accent-soft), transparent 70%)",
        cursor: "pointer", overflow: "hidden",
        transition: "transform .3s ease, box-shadow .3s ease",
        textDecoration: "none", color: "inherit",
        transform: hover ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hover
          ? "0 30px 60px color-mix(in oklab, var(--accent) 22%, transparent)"
          : "0 0 0 transparent",
      }}
    >
      <div
        style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          opacity: fading ? 0 : 1,
          transition: `opacity ${FEATURED_FADE_DURATION}ms ease`,
        }}
      >
        {post.cover && (
          <img
            src={post.cover}
            alt=""
            style={{
              position: "absolute", inset: 0,
              width: "100%", height: "100%", objectFit: "cover",
              opacity: hover ? 0.92 : 0.78,
              transition: "opacity .4s, transform .6s cubic-bezier(.22,.61,.36,1), filter .4s",
              transform: hover ? "scale(1.03)" : "scale(1)",
              filter: hover ? "saturate(1.15) brightness(1.02)" : "saturate(0.95) brightness(0.94)",
            }}
          />
        )}
        <div
          style={{
            position: "absolute", inset: 0,
            transition: "background .4s ease",
            background: post.cover
              ? hover
                ? `linear-gradient(135deg, color-mix(in oklab, var(--bg-elevated) 35%, transparent) 0%, color-mix(in oklab, var(--bg-elevated) 60%, transparent) 100%)`
                : `linear-gradient(135deg, color-mix(in oklab, var(--bg-elevated) 50%, transparent) 0%, color-mix(in oklab, var(--bg-elevated) 80%, transparent) 100%)`
              : "transparent",
          }}
        />
        <div
          style={{
            position: "absolute", right: -80, top: -80, width: 320, height: 320,
            background: "radial-gradient(circle, var(--accent-glow), transparent 60%)",
            filter: "blur(20px)",
          }}
        />
      </div>
      <div
        style={{
          position: "relative",
          padding: 48,
          opacity: fading ? 0 : 1,
          transition: `opacity ${FEATURED_FADE_DURATION}ms ease`,
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) auto",
          gap: 40, alignItems: "end",
        }}
      >
        <div>
          <div
            style={{
              display: "flex", gap: 12, marginBottom: 18,
              fontFamily: "var(--mono)", fontSize: 11,
              letterSpacing: "0.16em", color: "var(--accent-hi)",
            }}
          >
            <span>★ FEATURED</span>
            <span style={{ color: "var(--fg-dim)" }}>·</span>
            <span style={{ color: "var(--fg-dim)" }}>{post.date}</span>
            <span style={{ color: "var(--fg-dim)" }}>·</span>
            <span style={{ color: "var(--fg-dim)" }}>{post.read} min</span>
          </div>
          <h2
            style={{
              fontFamily: "var(--serif)", fontSize: "clamp(20px, 2.4vw, 28px)",
              fontWeight: 500, margin: "0 0 14px", lineHeight: 1.25,
              letterSpacing: "-0.01em", maxWidth: 720,
            }}
          >
            {post.title}
          </h2>
          <div
            style={{
              fontSize: 15, color: "var(--fg-muted)",
              maxWidth: 540, lineHeight: 1.6,
            }}
          >
            {post.excerpt}
          </div>
        </div>
        <div
          style={{
            fontFamily: "var(--serif)", fontSize: 48,
            color: "var(--accent)", lineHeight: 1, paddingLeft: 16,
            transition: "transform .3s ease",
            transform: hover ? "translateX(6px)" : "translateX(0)",
          }}
        >
          →
        </div>
      </div>
    </Link>
  );
};

interface BlogPostCardProps {
  post: WireBlogPost;
  index: number;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post, index }) => {
  const [hover, setHover] = useState(false);
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="reveal"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        animationDelay: `${0.04 * index}s`,
        position: "relative", overflow: "hidden",
        padding: 24, borderRadius: 12,
        border: hover ? "1px solid var(--accent)" : "1px solid var(--border)",
        background: "var(--bg-elevated)",
        cursor: "pointer",
        transition: "border-color .3s, transform .3s, box-shadow .3s",
        transform: hover ? "translateY(-3px)" : "translateY(0)",
        boxShadow: hover ? "0 18px 40px color-mix(in oklab, var(--accent) 18%, transparent)" : "0 0 0 transparent",
        display: "flex", flexDirection: "column", gap: 12,
        minHeight: 180, textDecoration: "none", color: "inherit",
      }}
    >
      {post.cover && (
        <img
          src={post.cover}
          alt=""
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%", objectFit: "cover",
            opacity: hover ? 0.92 : 0.62,
            pointerEvents: "none",
            transition: "opacity .4s, transform .6s cubic-bezier(.22,.61,.36,1), filter .4s",
            transform: hover ? "scale(1.04)" : "scale(1)",
            filter: hover ? "saturate(1.15) brightness(1.02)" : "saturate(0.95) brightness(0.94)",
          }}
        />
      )}
      <div
        style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          transition: "background .4s ease",
          background: post.cover
            ? hover
              ? `linear-gradient(180deg, transparent 0%, transparent 38%, color-mix(in oklab, var(--bg-elevated) 65%, transparent) 70%, var(--bg-elevated) 100%)`
              : `linear-gradient(180deg, color-mix(in oklab, var(--bg-elevated) 40%, transparent) 0%, color-mix(in oklab, var(--bg-elevated) 80%, transparent) 55%, var(--bg-elevated) 100%)`
            : "transparent",
        }}
      />
      <div
        style={{
          position: "relative",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          fontFamily: "var(--mono)", fontSize: 10,
          color: "var(--fg)", letterSpacing: "0.1em",
        }}
      >
        <span
          style={{
            fontWeight: 500, fontSize: 10, letterSpacing: "0.1em",
            padding: "3px 8px", borderRadius: 999,
            background: "color-mix(in oklab, var(--bg-elevated) 75%, transparent)",
            border: "1px solid var(--border)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            color: "var(--fg-muted)",
          }}
        >
          POST · {String(index + 2).padStart(2, "0")}
        </span>
        <span
          style={{
            fontWeight: 600, fontSize: 11, letterSpacing: "0.12em",
            padding: "4px 10px", borderRadius: 999,
            color: "color-mix(in oklab, var(--accent) 65%, var(--fg))",
            background: "color-mix(in oklab, var(--bg-elevated) 92%, transparent)",
            border: "1px solid color-mix(in oklab, var(--accent) 55%, var(--fg))",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
          }}
        >
          {post.tag}
        </span>
      </div>
      <div style={{ flex: 1 }} />
      <h3
        style={{
          position: "relative",
          fontFamily: "var(--serif)", fontSize: 17, fontWeight: 600,
          margin: 0, lineHeight: 1.3, letterSpacing: "-0.01em",
          color: "var(--fg)",
        }}
      >
        {post.title}
      </h3>
      <div
        style={{
          position: "relative",
          display: "flex", justifyContent: "space-between",
          fontFamily: "var(--mono)", fontSize: 10,
          color: "var(--fg-dim)", letterSpacing: "0.06em",
        }}
      >
        <span>{post.date}</span>
        <span>{post.read} min read →</span>
      </div>
    </Link>
  );
};

export default BlogPage;
