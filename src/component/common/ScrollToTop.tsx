import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * 라우트 변경 시 스크롤을 맨 위로 이동
 */
const ScrollToTop: React.FC = () => {
  const { hash, pathname, search } = useLocation();

  useEffect(() => {
    if (new URLSearchParams(search).has("section")) return;
    if (hash) return;
    window.scrollTo(0, 0);
  }, [hash, pathname, search]);

  return null;
};

export default ScrollToTop;
