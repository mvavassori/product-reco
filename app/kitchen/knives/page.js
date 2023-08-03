import React from "react";
import Image from "next/image";
import RedditEmbed from "@/utils/RedditEmbeds";

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

  const embedReddit3 = `<blockquote class="reddit-embed-bq" style="height:520px" data-embed-showedits="false" data-embed-created="2023-07-27T14:06:56.879Z" data-embed-showusername="false" data-embed-height="500">      <a href="https://www.reddit.com/r/BuyItForLife/comments/wufx11/my_victorinox_fibrox_came_in_my_culinary_school/">My Victorinox Fibrox. Came in my culinary school issued knife kit 31 years ago. used it professionally for 25 years and it's still my home daily driver.</a><br> by      <a href="https://www.reddit.com/user/Jillredhanded">u/Jillredhanded</a> in      <a href="https://www.reddit.com/r/BuyItForLife/">BuyItForLife</a>    </blockquote><script async="" src="https://embed.reddit.com/widgets.js" charset="UTF-8"></script>`;

  const embedCodeYoutube = `
    <iframe width="560" height="315" src="https://www.youtube.com/embed/X9_Qux4QKyw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  `;

  return (
    <>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl mt-10 mb-12">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900">
          Article Title
        </h1>
        <Image
          src="https://cdn.shopify.com/s/files/1/0608/3313/6870/products/1030130120.png?v=1659365019"
          width={1362}
          height={1200}
          className="w-full mt-12 rounded-lg shadow-md"
          alt="Article"
        />
      </div>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl mb-24 lg:flex">
        <article className="prose lg:prose-xl mt-10 md:w-8/12">
          <p className="text-lg mb-8 mt-12">
            A chef&apos;s knife is an essential tool in any kitchen. It&apos;s
            the go-to knife for most culinary tasks, and picking the right one
            can make a world of difference in your cooking experience. In this
            comprehensive guide, we&apos;ll explore the main characteristics
            that differentiate the best chef&apos;s knives, such as edge
            retention, stain resistance, length of the blade, handle style and
            material, and much more.
          </p>

          <h2 className="text-2xl font-semibold mb-8">
            Key Characteristics to Look for in a Chef&apos;s Knife
          </h2>
          <ul className="list-decimal pl-5 mb-8">
            <li className="mb-2">
              Edge Retention: Edge retention refers to how long a knife can keep
              its sharpness...
            </li>
            <li className="mb-2">
              Stain Resistance: Stainless steel knives resist staining and
              corrosion...
            </li>
            <li className="mb-2">
              Blade Length: The length of the blade affects the knife&apos;s
              versatility...
            </li>
            <li className="mb-2">
              Handle Style and Material: The handle&apos;s material and
              ergonomic design contribute...
            </li>
            <li className="mb-2">
              Spine Thickness: Spine thickness affects the weight and balance of
              the knife...
            </li>
            <li className="mb-2">
              HRC (Rockwell Hardness): The Rockwell scale measures the hardness
              of the knife&apos;s steel...
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-8">
            The Great Divide: Japanese vs. German Style Knives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-4 border rounded">
              <h3 className="text-xl font-bold">Japanese Style Knives</h3>
              <p className="mb-2">
                Blade: Thinner and harder, offering precision but less
                durability.
              </p>
              <p className="mb-2">
                Steel: Usually a higher carbon content with higher HRC ratings.
              </p>
              <p className="mb-2">
                Angle: Sharper edge angles for more refined cutting.
              </p>
              <p className="mb-2">
                Use: Ideal for delicate tasks like slicing fish.
              </p>
            </div>
            <div className="p-4 border rounded">
              <h3 className="text-xl font-bold">German Style Knives</h3>
              <p className="mb-2">
                Blade: Thicker and more robust, offering durability but less
                precision.
              </p>
              <p className="mb-2">
                Steel: Often lower carbon content with lower HRC ratings.
              </p>
              <p className="mb-2">
                Angle: Wider edge angles, more forgiving for rougher tasks.
              </p>
              <p className="mb-2">
                Use: Great for heavy-duty tasks like chopping vegetables.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-8">
            Stainless vs. Carbon Steel
          </h2>
          <p className="text-lg mb-8">
            Stainless Steel: Resistant to rust and staining but often softer.
          </p>
          <p className="text-lg mb-8">
            Carbon Steel: Prone to rust if not cared for but usually harder and
            better at edge retention.
          </p>

          <h2 className="text-2xl font-semibold mb-8">
            The Victorinox Fibrox 8-Inch Chef&apos;s Knife: A Universal Choice
          </h2>
          <p className="text-lg mb-8">
            Considering all the factors discussed, the Victorinox Fibrox 8-inch
            Chef&apos;s Knife stands out as an excellent option for most people.
            Its stainless steel blade offers good stain resistance, and the
            Rockwell hardness of around 56 ensures decent edge retention without
            being too brittle...
          </p>

          <h2 className="text-2xl font-semibold mb-8">Conclusion</h2>
          <p className="text-lg mb-8">
            Choosing the best chef&apos;s knife involves understanding a myriad
            of factors, including the style of the knife, the material of the
            blade and handle, and the particular characteristics that match your
            cooking needs. The Victorinox Fibrox 8-Inch Chef&apos;s Knife
            masterfully combines these essential qualities, providing an optimal
            balance of edge retention, stain resistance, comfort, and cost.
            Whether you are a seasoned chef or just starting your culinary
            journey, this knife is likely to be your best kitchen companion.
          </p>

          <div className="max-w-full">
            <RedditEmbed embedCode={embedReddit1} />
          </div>
          <div className=" mt-6">
            <div
              dangerouslySetInnerHTML={{ __html: embedCodeYoutube }}
              className="mt-6 flex justify-center items-center max-w-full"
            />
          </div>
        </article>
        <div className="lg:w-4/12 px-6 mb-8 prose lg:prose-xl mt-10">
          <div className="bg-gray-50 rounded p-3">
            <h2 className="text-2xl font-semibold mb-8">TL;DR</h2>
            <p className="text-lg">
              Choosing the best chef&apos;s knife involves understanding a
              myriad of factors, including the style of the knife, the material
              of the blade and handle, and the particular characteristics that
              match your cooking needs. The Victorinox Fibrox 8-Inch Chef&apos;s
              Knife masterfully combines these essential qualities, providing an
              optimal balance of edge retention, stain resistance, comfort, and
              cost. Whether you are a seasoned chef or just starting your
              culinary journey, this knife is likely to be your best kitchen
              companion.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogArticle;
