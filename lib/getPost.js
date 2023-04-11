import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "posts");

export function getPost(slug) {
  const filePath = path.join(postsDir, `${slug}.md`);
  const contents = fs.readFileSync(filePath, "utf-8");

  const resultMatter = matter(contents);
  return {
    slug: path.basename(filePath).replace(/\.md$/, ""),
    title: resultMatter.data.title,
    subTitle: resultMatter.data.subtitle,
    date: resultMatter.data.date,
    content: resultMatter.content,
  };
}
