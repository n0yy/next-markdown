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
<<<<<<< HEAD
    <article className="prose-lg lg:prose-xl min-h-screen mx-auto p-10 mt-10 max-w-none md:w-[700px] lg:w-[900px] overflow-hidden prose-headings:text-indigo-600 prose-pre:bg-indigo-900 prose-pre:text-indigo-50">
=======
    <article className="prose prose-zinc lg:prose-xl min-h-screen mx-auto p-10 mt-10 max-w-none md:w-[769px] lg:w-[900px] overflow-hidden">
>>>>>>> 7b4442d88bd4fd431075c226055474117f3c242e
      <header className="border-b-2 pb-10">
        <h1 className="underline underline-offset-[5px]">{post.title}</h1>
        <h3 className="font-thin">{post.subTitle}</h3>
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
