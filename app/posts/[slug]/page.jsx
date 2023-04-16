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
    <article className="prose prose-blockquote:border-zinc-500 prose-blockquote:bg-zinc-100 prose-blockquote:pr-3 prose-blockquote:rounded-e-lg lg:prose-lg min-h-screen mx-auto p-10 mt-10 max-w-none md:w-[769px] lg:w-[900px] overflow-hidden text-justify prose-sky">
      <header className="">
        <h1 className="underline underline-offset-[5px]">{post.title}</h1>
        <h3 className="!-mt-5 font-thin">{post.subTitle}</h3>
        <span className="block text-sm not-prose text-end text-zinc-400">
          {post.date}
        </span>
      </header>
      <main className="mt-10">
        <Markdown>{post.content}</Markdown>
      </main>
    </article>
  );
}
