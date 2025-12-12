import React, { useCallback, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./component/Header/header";
import Footer from "./component/Footer/footer";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";

type Theme = "light" | "dark";

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    try {
      const stored = localStorage.getItem("portfolio-theme") as Theme | null;
      // localStorage에 저장된 값이 있으면 그걸 사용, 없으면 무조건 dark
      return stored || "dark";
    } catch {
      return "dark";
    }
  });

  // ✅ theme 변경 시에만 DOM + localStorage 동기화
  useEffect(() => {
    if (typeof document === "undefined") return;

    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {
      // ignore
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  const handleScrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerHeight = 64; // --header-height 값
      const offset = 20; // 추가 여백
      const elementPosition =
        el.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <BrowserRouter>
      {/* 헤더 */}
      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
        onNavClick={handleScrollTo}
      />

      {/* 라우트 */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>

      {/* FOOTER */}
      <Footer />
    </BrowserRouter>
  );
};

export default App;
