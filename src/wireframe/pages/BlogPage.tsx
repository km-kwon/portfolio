import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { BLOG_POSTS } from "../data";

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

      {featured && (
        <Link
          to={`/blog/${featured.slug}`}
          className="reveal d1"
          style={{
            position: "relative", display: "block",
            padding: 48, marginBottom: 56, borderRadius: 18,
            border: "1px solid var(--accent)",
            background: `linear-gradient(135deg, var(--accent-soft), transparent 70%)`,
            cursor: "pointer", overflow: "hidden",
            transition: "transform .3s", textDecoration: "none", color: "inherit",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
        >
          {featured.cover && (
            <img
              src={featured.cover}
              alt=""
              style={{
                position: "absolute", inset: 0,
                width: "100%", height: "100%", objectFit: "cover",
                opacity: 0.80, pointerEvents: "none",
                filter: "saturate(1.05)",
              }}
            />
          )}
          <div
            style={{
              position: "absolute", inset: 0, pointerEvents: "none",
              background: featured.cover
                ? `linear-gradient(135deg, color-mix(in oklab, var(--bg-elevated) 50%, transparent) 0%, color-mix(in oklab, var(--bg-elevated) 80%, transparent) 100%)`
                : "transparent",
            }}
          />
          <div
            style={{
              position: "absolute", right: -80, top: -80, width: 320, height: 320,
              background: "radial-gradient(circle, var(--accent-glow), transparent 60%)",
              pointerEvents: "none", filter: "blur(20px)",
            }}
          />
          <div
            style={{
              position: "relative", display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) auto", gap: 40, alignItems: "end",
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
                <span style={{ color: "var(--fg-dim)" }}>{featured.date}</span>
                <span style={{ color: "var(--fg-dim)" }}>·</span>
                <span style={{ color: "var(--fg-dim)" }}>{featured.read} min</span>
              </div>
              <h2
                style={{
                  fontFamily: "var(--serif)", fontSize: "clamp(20px, 2.4vw, 28px)",
                  fontWeight: 500, margin: "0 0 14px", lineHeight: 1.25,
                  letterSpacing: "-0.01em", maxWidth: 720,
                }}
              >
                {featured.title}
              </h2>
              <div
                style={{
                  fontSize: 15, color: "var(--fg-muted)",
                  maxWidth: 540, lineHeight: 1.6,
                }}
              >
                {featured.excerpt}
              </div>
            </div>
            <div
              style={{
                fontFamily: "var(--serif)", fontSize: 48,
                color: "var(--accent)", lineHeight: 1, paddingLeft: 16,
              }}
            >
              →
            </div>
          </div>
        </Link>
      )}

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
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="reveal"
            style={{
              animationDelay: `${0.04 * i}s`,
              position: "relative", overflow: "hidden",
              padding: 24, borderRadius: 12,
              border: "1px solid var(--border)", background: "var(--bg-elevated)",
              cursor: "pointer", transition: "all .3s",
              display: "flex", flexDirection: "column", gap: 12,
              minHeight: 180, textDecoration: "none", color: "inherit",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {post.cover && (
              <img
                src={post.cover}
                alt=""
                style={{
                  position: "absolute", inset: 0,
                  width: "100%", height: "100%", objectFit: "cover",
                  opacity: 0.80, pointerEvents: "none",
                  filter: "saturate(1.05)",
                }}
              />
            )}
            <div
              style={{
                position: "absolute", inset: 0, pointerEvents: "none",
                background: post.cover
                  ? `linear-gradient(180deg, color-mix(in oklab, var(--bg-elevated) 30%, transparent) 0%, color-mix(in oklab, var(--bg-elevated) 75%, transparent) 60%, var(--bg-elevated) 100%)`
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
                POST · {String(i + 2).padStart(2, "0")}
              </span>
              <span
                style={{
                  fontWeight: 500, fontSize: 11, letterSpacing: "0.12em",
                  padding: "4px 10px", borderRadius: 999,
                  color: "color-mix(in oklab, var(--accent) 50%, white)",
                  background: "color-mix(in oklab, var(--bg-elevated) 92%, transparent)",
                  border: "1px solid color-mix(in oklab, var(--accent) 75%, white)",
                  backdropFilter: "blur(6px)",
                  WebkitBackdropFilter: "blur(6px)",
                }}
              >
                {post.tag}
              </span>
            </div>
            <h3
              style={{
                position: "relative",
                fontFamily: "var(--serif)", fontSize: 15, fontWeight: 500,
                margin: 0, lineHeight: 1.35, letterSpacing: "-0.005em", flex: 1,
              }}
            >
              {post.title}
            </h3>
            <div style={{ position: "relative", fontSize: 12, color: "var(--fg-muted)", lineHeight: 1.55, opacity: 0.85 }}>
              {post.excerpt.length > 110 ? post.excerpt.slice(0, 110) + "…" : post.excerpt}
            </div>
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
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
