import Image from "next/image";
import Link from "next/link";
import HomeTypewriter from "@/components/HomeTypewriter";
import Posts from "@/components/Posts";

export const metadata = {
  title: "Standardpick",
  description: "The place where people find real reviews from the web",
};

export const revalidate = 86400;

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">
            Community-Driven Product Reviews
          </h1>
          <p className="text-lg mb-8">
            Discover the best products based on real user feedback from Reddit
            and YouTube.
          </p>
          {/* <Link
            href="#"
            className="bg-white text-black py-2 px-6 rounded-full font-semibold hover:bg-gray-300"
          >
            Explore Reviews
          </Link> */}
          <HomeTypewriter />
        </div>
      </section>

      <Posts />

      {/* Introduction and Value Proposition */}
      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Why Choose Our Reviews?</h2>
          <p className="text-lg mb-8">
            Our reviews are curated from the community, ensuring unbiased and
            authentic opinions that help you make informed decisions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Community Insights</h3>
              <p className="text-gray-700">
                Get insights from real users who share their experiences with
                products they actually use.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Unbiased Opinions</h3>
              <p className="text-gray-700">
                Our reviews are based on collective opinions, not influenced by
                individual preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Highlights */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Explore Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Kitchen</h3>
              <p className="text-gray-700">
                Discover top-rated kitchen products recommended by the
                community.
              </p>
              <Link
                href="#"
                className="mt-4 block text-blue-500 font-semibold hover:underline"
              >
                Explore Kitchen Products
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Tech</h3>
              <p className="text-gray-700">
                Find the latest tech gadgets and electronics with real user
                reviews.
              </p>
              <Link
                href="#"
                className="mt-4 block text-blue-500 font-semibold hover:underline"
              >
                Explore Tech Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reddit and YouTube Integrations */}
      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Community Says</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              {/* Reddit Integration */}
              <div className="bg-gray-200 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Reddit Reviews</h3>
                <p className="text-gray-700">
                  Join our Reddit community to see real product discussions and
                  reviews.
                </p>
                <Link
                  href="#"
                  className="mt-4 block text-blue-500 font-semibold hover:underline"
                >
                  Join Reddit Community
                </Link>
              </div>
            </div>
            <div>
              {/* YouTube Integration */}
              <div className="bg-gray-200 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">YouTube Reviews</h3>
                <p className="text-gray-700">
                  Watch video reviews from trusted YouTubers and get insights on
                  the latest products.
                </p>
                <Link
                  href="#"
                  className="mt-4 block text-blue-500 font-semibold hover:underline"
                >
                  Watch YouTube Reviews
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
