// BLOG · Option B — Featured + grid

const BlogPage = ({ onNav }) => {
  const featured = BLOG_POSTS.find(p => p.featured) || BLOG_POSTS[0];
  const rest = BLOG_POSTS.filter(p => p !== featured);
  const tags = ["All", ...new Set(BLOG_POSTS.map(p => p.tag))];
  const [filter, setFilter] = React.useState("All");
  const visible = filter === "All" ? rest : rest.filter(p => p.tag === filter);

  return (
    <div className="page-fade">
      <div className="marker">
        <span className="num">06</span><span>Writing · {BLOG_POSTS.length} posts</span><span className="bar" />
      </div>

      <h1 className="reveal" style={{
        fontFamily: "var(--serif)", fontSize: "clamp(48px, 6vw, 88px)", fontWeight: 400,
        letterSpacing: "-0.02em", margin: "0 0 32px", lineHeight: 1.02,
      }}>
        <em style={{ color: "var(--accent-hi)", fontStyle: "italic" }}>Words</em>,
        <br/>
        <span style={{ color: "var(--fg-muted)" }}>not just code.</span>
      </h1>

      {/* Featured */}
      <div className="reveal d1" style={{
        position: "relative",
        padding: 48, marginBottom: 56,
        borderRadius: 18,
        border: "1px solid var(--accent)",
        background: `linear-gradient(135deg, var(--accent-soft), transparent 70%)`,
        cursor: "pointer", overflow: "hidden",
        transition: "transform .3s",
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
      onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
      >
        <div style={{ position: "absolute", right: -80, top: -80, width: 320, height: 320,
          background: `radial-gradient(circle, var(--accent-glow), transparent 60%)`,
          pointerEvents: "none", filter: "blur(20px)",
        }} />
        <div style={{ position: "relative", display: "grid", gridTemplateColumns: "minmax(0, 1fr) auto", gap: 40, alignItems: "end" }}>
          <div>
            <div style={{ display: "flex", gap: 12, marginBottom: 18, fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.16em", color: "var(--accent-hi)" }}>
              <span>★ FEATURED</span>
              <span style={{ color: "var(--fg-dim)" }}>·</span>
              <span style={{ color: "var(--fg-dim)" }}>{featured.date}</span>
              <span style={{ color: "var(--fg-dim)" }}>·</span>
              <span style={{ color: "var(--fg-dim)" }}>{featured.read} min</span>
            </div>
            <h2 style={{
              fontFamily: "var(--serif)", fontSize: "clamp(28px, 3.6vw, 48px)", fontWeight: 500,
              margin: "0 0 16px", lineHeight: 1.1, letterSpacing: "-0.015em",
              maxWidth: 720,
            }}>{featured.title}</h2>
            <div style={{ fontSize: 15, color: "var(--fg-muted)", maxWidth: 540, lineHeight: 1.6 }}>
              FSD가 멋져 보인 적은 있어도 와닿은 적은 없었다. DDD를 프론트에 녹여 도메인 슬라이스로 다시 그려본 기록.
            </div>
          </div>
          <div style={{ fontFamily: "var(--serif)", fontSize: 80, color: "var(--accent)", lineHeight: 1, paddingLeft: 16 }}>→</div>
        </div>
      </div>

      {/* Tag filter */}
      <div className="reveal d2" style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
        {tags.map(t => (
          <button key={t} onClick={() => setFilter(t)} style={{
            fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.06em",
            padding: "7px 14px", borderRadius: 999,
            border: filter === t ? "1px solid var(--accent)" : "1px solid var(--border)",
            background: filter === t ? "var(--accent-soft)" : "transparent",
            color: filter === t ? "var(--accent-hi)" : "var(--fg-muted)",
            transition: "all .25s",
          }}>{t}</button>
        ))}
      </div>

      {/* Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 16 }}>
        {visible.map((post, i) => (
          <div key={i} className="reveal" style={{
            animationDelay: `${0.04 * i}s`,
            padding: 24, borderRadius: 12,
            border: "1px solid var(--border)",
            background: "var(--bg-elev)",
            cursor: "pointer", transition: "all .3s",
            display: "flex", flexDirection: "column", gap: 12,
            minHeight: 180,
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--mono)", fontSize: 10, color: "var(--fg-dim)", letterSpacing: "0.1em" }}>
              <span>POST · {String(i + 2).padStart(2, "0")}</span>
              <span style={{ color: "var(--accent)" }}>{post.tag}</span>
            </div>
            <h3 style={{
              fontFamily: "var(--serif)", fontSize: 19, fontWeight: 500,
              margin: 0, lineHeight: 1.25, letterSpacing: "-0.01em",
              flex: 1,
            }}>{post.title}</h3>
            <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--mono)", fontSize: 10, color: "var(--fg-dim)", letterSpacing: "0.06em" }}>
              <span>{post.date}</span>
              <span>{post.read} min read →</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

window.BlogPage = BlogPage;
