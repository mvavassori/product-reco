import getFormattedDate from "@/lib/getFormattedDate";
import { getPostsMeta, getPostByName } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";

export const revalidate = 86400;

export async function generateStaticParams() {
  const posts = await getPostsMeta();

  if (!posts) return [];
  return posts.map((post) => ({
    postId: post.id,
  }));
}

export async function generateMetadata({ params: { postId } }) {
  const post = await getPostByName(`${postId}.mdx`);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }
  return {
    title: post.title,
  };
}

export default async function Post({ params: { postId } }) {
  const post = await getPostByName(`${postId}.mdx`);

  if (!post) {
    notFound();
  }

  const { meta, content } = post;

  const pubDate = getFormattedDate(meta.date);

  return (
    <div className="px-6">
      <div className=" px-4 sm:px-6 lg:px-8 max-w-5xl mt-10 mb-12">
        <h1 className="text-4xl mt-4 mb-0 font-semibold">{meta.title}</h1>
        <p className="mt-2 text-xs">{pubDate}</p>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 mb-24 md:flex flex-col-reverse md:flex-row justify-between">
        <article className="my-6 md:w-8/12 text-lg prose">{content}</article>
        <div className="md:w-4/12 mb-8 mt-10">
          <div className="bg-gray-50 rounded p-3">
            <h3 className="text-xl font-semibold mb-8">TL;DR</h3>
            <p className="">{meta.excerpt}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
