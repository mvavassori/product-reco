import React from "react";
import Image from "next/image";
import RedditEmbed from "@/utils/RedditEmbeds";

const PotsArticle = () => {
  const embedReddit1 = `
    <!-- Embed code for Reddit discussion -->
  `;

  const embedCodeYoutube = `
    <!-- Embed code for YouTube video -->
  `;

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl mt-10">
      <h1 className="text-5xl font-bold tracking-tight text-gray-900 mb-12">
        The Best Kitchen Pots: A Guide to Durability and Performance
      </h1>
      <div className="lg:flex">
        <div className="mb-8 lg:w-8/12 lg:pr-8">
          <article className="prose lg:prose-xl">
            <p className="text-lg mb-8">
              When it comes to equipping your kitchen with the essentials,
              having the right pots can make all the difference. From boiling
              pasta to simmering sauces, a durable and high-performing pot is a
              must-have for any home cook. In this guide, we&apos;ll walk you
              through the key characteristics to look for when buying kitchen
              pots and highlight some of the best products on the market.
            </p>
            {/* ... */}
            {/* Rest of the content */}
            {/* ... */}
          </article>
        </div>
        <div className="lg:w-4/12">
          <div className="bg-gray-50 rounded p-4 mb-8">
            <h2 className="text-2xl font-semibold mb-4">TL;DR</h2>
            <p className="text-lg">
              Investing in high-quality kitchen pots is a wise decision for any
              cooking enthusiast. The right pots can elevate your culinary
              creations and make your cooking experience more enjoyable.
              Remember to consider the material, construction, handles, lids,
              size, and maintenance when making your purchase. Whether you opt
              for stainless steel, cast iron, or nonstick, a well-chosen kitchen
              pot will undoubtedly become an indispensable tool in your kitchen.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-full">
        <RedditEmbed embedCode={embedReddit1} />
      </div>
      <div className="mt-6">
        <div
          dangerouslySetInnerHTML={{ __html: embedCodeYoutube }}
          className="mt-6 flex justify-center items-center max-w-full"
        />
      </div>
    </div>
  );
};

export default PotsArticle;
