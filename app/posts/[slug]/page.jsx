import { getPostsData } from "@/lib/getPosts";
import { getPost } from "@/lib/getPost";
import Markdown from "markdown-to-jsx";
import { notFound } from "next/navigation";

export default function Post({ params }) {
  const { slug } = params;
  const posts = getPostsData();
  if (!posts.find((post) => post.slug === slug)) {
    return notFound();
  }
  const post = getPost(slug);

  return (
    <article className="prose prose-zinc lg:prose-xl min-h-screen mx-auto p-10 mt-10 max-w-none md:w-[769px] lg:w-[900px] overflow-hidden">
      <header className="border-b-2 pb-10">
        <h1 className="underline underline-offset-[5px]">{post.title}</h1>
        <h3 className="font-thin">{post.subTitle}</h3>
        <span className="text-sm">{post.date}</span>
      </header>
      <main className="mt-10">
        <Markdown>{post.content}</Markdown>
      </main>
    </article>
  );
}
