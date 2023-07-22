import React from "react";
import Image from "next/image";

const BlogArticle = () => {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
      <article className="prose lg:prose-xl mt-10">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900">
          Article Title
        </h1>
        {/* <Image
          src="https://placekitten.com/800/600"
          width={800}
          height={600}
          className="w-full object-cover object-center mt-12 rounded-lg shadow-md"
          alt="Article"
        /> */}
        <p className="mt-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <h2 className="mt-6 mb-2 text-2xl font-bold tracking-tight text-gray-900">
          Subheading
        </h2>
        <p className="text-xl ">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <h2>Another Subheading</h2>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
      </article>
    </div>
  );
};

export default BlogArticle;
