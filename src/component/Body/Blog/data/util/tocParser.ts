import { unified } from "unified";
import remarkParse from "remark-parse";
import { visit } from "unist-util-visit";
import GitHubSlugger from "github-slugger";

type TocItem = { id: string; text: string; depth: number };

export function extractToc(markdown: string, depths: number[] = [2, 3]) {
  const tree = unified().use(remarkParse).parse(markdown);
  const slugger = new GitHubSlugger();
  const items: TocItem[] = [];

  visit(tree, "heading", (node: any) => {
    const depth: number = node.depth;
    if (!depths.includes(depth)) return;

    // heading 안의 텍스트만 평탄화해서 추출
    const text = (node.children ?? [])
      .map((c: any) => (c.type === "text" ? c.value : c.value ?? ""))
      .join("")
      .trim();

    if (!text) return;

    const id = slugger.slug(text); // 동일 텍스트 중복도 자동 처리
    items.push({ id, text, depth });
  });

  return items;
}
