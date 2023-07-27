import React from "react";
import Image from "next/image";

const BlogArticle = () => {
  const embedReddit1 = `
    <blockquote class="reddit-embed-bq" data-embed-showtitle="true" data-embed-context="1" data-embed-depth="2" data-embed-showedits="false" data-embed-created="2023-07-27T13:49:28.421Z" data-embed-showusername="false" data-embed-height="356">
      <a href="https://www.reddit.com/r/BIFLKitchen/comments/11kz2m3/best_chefs_knife_to_get_in_2023_reddit_recommends/jb9zivx/">Comment</a><br> by
      <a href="https://www.reddit.com/user/Rachel_Jones_k9I">u/Rachel_Jones_k9I</a> from discussion
      <a href="https://www.reddit.com/r/BIFLKitchen/comments/11kz2m3/best_chefs_knife_to_get_in_2023_reddit_recommends/">Best Chef's knife to get in 2023? Reddit recommends what?</a><br> in
      <a href="https://www.reddit.com/r/BIFLKitchen/">BIFLKitchen</a>
    </blockquote>
    <script async src="https://embed.reddit.com/widgets.js" charset="UTF-8"></script>
  `;

  const embedReddit2 = `
    <blockquote class="reddit-embed-bq" data-embed-showtitle="true" data-embed-showedits="false" data-embed-created="2023-07-27T13:58:46.004Z" data-embed-showusername="false" data-embed-height="298">
      <a href="https://www.reddit.com/r/Cooking/comments/jw1lx4/best_chef_knife_on_a_budget/gcnh1lg/">Comment</a><br> by
      <a href="https://www.reddit.com/user/Commercial-Gap6969">u/Commercial-Gap6969</a> from discussion
      <a href="https://www.reddit.com/r/Cooking/comments/jw1lx4/best_chef_knife_on_a_budget/">Best chef knife on a budget?</a><br> in
      <a href="https://www.reddit.com/r/Cooking/">Cooking</a>
    </blockquote>
    <script async src="https://embed.reddit.com/widgets.js" charset="UTF-8"></script>
  `;

  const embedReddit3 = `<blockquote class="reddit-embed-bq" style="height:500px" data-embed-showedits="false" data-embed-created="2023-07-27T14:06:56.879Z" data-embed-showusername="false" data-embed-height="500">      <a href="https://www.reddit.com/r/BuyItForLife/comments/wufx11/my_victorinox_fibrox_came_in_my_culinary_school/">My Victorinox Fibrox. Came in my culinary school issued knife kit 31 years ago. used it professionally for 25 years and it's still my home daily driver.</a><br> by      <a href="https://www.reddit.com/user/Jillredhanded">u/Jillredhanded</a> in      <a href="https://www.reddit.com/r/BuyItForLife/">BuyItForLife</a>    </blockquote><script async="" src="https://embed.reddit.com/widgets.js" charset="UTF-8"></script>`;

  const embedCodeYoutube = `
    <iframe width="560" height="315" src="https://www.youtube.com/embed/X9_Qux4QKyw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  `;

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
      <article className="prose lg:prose-xl mt-10">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900">
          Article Title
        </h1>
        <Image
          src="https://placekitten.com/800/600"
          width={800}
          height={600}
          className="w-full object-cover object-center mt-12 rounded-lg shadow-md"
          alt="Article"
        />
        <p className="mt-12 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <div
          dangerouslySetInnerHTML={{ __html: embedReddit1 }}
          className="mt-6"
        />

        <h2 className="mt-6 mb-2 text-2xl font-bold tracking-tight text-gray-900">
          Subheading
        </h2>
        <p className="text-xl ">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>

        <div
          dangerouslySetInnerHTML={{ __html: embedReddit2 }}
          className="mt-6"
        />

        <h2>Another Subheading</h2>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>

        <div
          dangerouslySetInnerHTML={{ __html: embedReddit3 }}
          className="mt-6"
        />
        <div
          dangerouslySetInnerHTML={{ __html: embedCodeYoutube }}
          className="mt-6"
        />
      </article>
    </div>
  );
};

export default BlogArticle;
