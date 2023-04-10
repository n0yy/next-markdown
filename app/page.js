import { Inter } from "next/font/google";
import ListsPost from "@/components/ListsPost";
import { getPostsData } from "@/lib/Posts";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const posts = getPostsData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {posts.map((post, index) => (
        <ListsPost {...post} key={index} />
      ))}
    </main>
  );
}
