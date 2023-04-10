import Link from "next/link";

export default function ListsPost({ slug, title, subTitle, date }) {
  return (
    <section>
      <ul className="space-y-3">
        <li key={slug} className="mb-3">
          <Link href={`/posts/${slug}`}>
            <div className="border border-black px-5 py-2 hover:scale-105 duration-200 hover:rounded-xl max-w-sm hover:shadow-xl">
              <h1 className="text-2xl text-slate-900 font-medium">{title}</h1>
              <h2 className="text-md text-slate-600">{subTitle}</h2>
              <span className="block text-sm mt-2 text-right text-slate-500">
                {date}
              </span>
            </div>
          </Link>
        </li>
      </ul>
    </section>
  );
}
