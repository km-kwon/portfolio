import { useEffect, useState } from "react";

export function useScrollSpy(ids: string[]) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (!ids.length) return;

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        // 화면에 들어온 것 중 "가장 위에 가까운" 걸 active로
        const visible = entries.filter((e) => e.isIntersecting);
        if (!visible.length) return;

        visible.sort((a, b) => {
          const ay = (a.target as HTMLElement).getBoundingClientRect().top;
          const by = (b.target as HTMLElement).getBoundingClientRect().top;
          return Math.abs(ay) - Math.abs(by);
        });

        setActiveId((visible[0].target as HTMLElement).id);
      },
      {
        root: null,
        // 헤더 높이 고려해서 조금 아래에서 잡히게
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0.1, 0.2, 0.3],
      }
    );

    elements.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ids.join("|")]);

  return activeId;
}
