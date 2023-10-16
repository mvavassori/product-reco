import getFormattedDate from "@/lib/getFormattedDate";
import { getPostsMeta, getPostByName } from "@/lib/posts";
import { notFound } from "next/navigation";
// import Link from "next/link";
import Image from "next/image";

export const revalidate = 86400;

export async function generateStaticParams() {
  const posts = await getPostsMeta();

  // console.log("getPostsMeta()", posts);

  if (!posts) return [];
  return posts.map((post) => ({
    postId: post.id,
  }));
}

export async function generateMetadata({ params: { postId } }) {
  const post = await getPostByName(`${postId}.mdx`);

  // console.log("getPostByName()", post);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "This post does not exist",
      date: "",
      thumbnail: "",
    };
  }
  return {
    title: post.meta.title,
    description: post.meta.excerpt,
    date: post.meta.date,
    thumbnail: post.meta.thumbnail,
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
    <>
      <div className="px-4 sm:px-6 lg:px-36 mt-10 mb-12">
        <h1 className="text-4xl mt-4 mb-0 font-bold">{meta.title}</h1>
        <div className="pt-2">
          <span className="text-xs text-violet-700 font-semibold">
            Updated{" "}
          </span>
          <span className="text-xs">{pubDate}</span>
        </div>

        <div className="relative w-full aspect-w-16 aspect-h-9">
          <Image
            src={meta.thumbnail}
            fill
            className="mt-12 object-center object-scale-down"
            alt={`${meta.title} thumbanail's image`}
          />
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-36 mb-24 md:flex flex-col-reverse md:flex-row justify-between">
        <article className="my-6 md:w-8/12 text-lg prose">{content}</article>
        <div className="md:w-4/12 mb-8 mt-10 ml-6">
          <div className="bg-gray-50 rounded p-3">
            <h3 className="text-xl font-semibold mb-8">TL;DR</h3>
            <p className="">{meta.tldr}</p>
          </div>
        </div>
      </div>
    </>
  );
}
