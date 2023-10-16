import HomeTypewriter from "@/components/HomeTypewriter";
import Posts from "@/components/Posts";

export const metadata = {
  title: "standardpick.com",
  description: "The place where people find real reviews from the web",
};

export const revalidate = 86400;

export default function Home() {
  return (
    <>
      {/* Disclaimer Section */}
      <section className="py-1 bg-red-200">
        <div className="text-center">
          <p className="ml-2 text-sm">
            We&apos;re actively working to cover more categories.
          </p>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gray-200 py-16 sm:px-6 lg:px-40">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">
            The Best Products Based on Community Feedback
          </h1>
          <p className="text-lg mb-8">
            Discover top-rated products curated from real reviews on Reddit,
            YouTube, forums and more. Our research saves you time by identifying
            the most loved option based on authentic user experiences.
          </p>
          <HomeTypewriter />
        </div>
      </section>

      {/* Posts Section */}
      <Posts />

      {/* One Recommendation Section */}
      <section className="bg-gray-100 py-16 sm:px-6 lg:px-40">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Just One Recommendation Per Category
          </h2>

          <p className="text-lg mb-8">
            Our reviews suggest just one top product for each category. This
            removes the paralysis of too much choice and overload. We cut
            through the noise to identify the
            <span className="font-semibold"> &quot;gold standard&quot; </span>-
            the option most loved by communities.
          </p>

          <p className="text-lg mb-8">
            This saves you time spent endlessly researching. No more browsing
            through dozens of reviews trying to determine the best choice. We do
            the hard work for you and provide
            <span className="font-semibold">
              {" "}
              a single definitive recommendation{" "}
            </span>
            with clear reasoning.
          </p>

          <p className="text-lg">
            For each category, we name the one product that rises above based on
            real user experiences and industry consensus. Our singular
            recommendations give you confidence in what the experts and
            enthusiasts agree is the top option.
          </p>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-16 sm:px-6 lg:px-40">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Why Our Community-Driven Reviews Are Trustworthy
          </h2>

          <p className="text-lg mb-8">
            We compile authentic insights from real users across{" "}
            <span className="text-orange-500">Reddit</span>,{" "}
            <span className="text-red-500">YouTube</span>,{" "}
            <span className="text-blue-500">niche forums</span> and more. Our
            rigorous process ensures we provide objective analysis to help you
            make informed decisions.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-12 h-12 text-blue-500 mb-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.917.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 001.854 1.854 6.726 6.726 0 001.854 1.854m-1.854 1.854h-.008v.008h-.008v-.008zm.982.98a6.492 6.492 0 01-1.854 1.855 6.492 6.492 0 01-1.854-1.855M16.5 18.75h.008v-.008h-.008v.008z"
                />
              </svg>
              <h3 className="text-xl font-bold mb-2">In-Depth Research</h3>
              <p>
                We dig deep into communities to provide fuller context - not
                just cherry-picked reviews.
              </p>
            </div>

            <div className="bg-white p-8 rounded shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-12 h-12 text-blue-500 mb-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
              <h3 className="text-xl font-bold mb-2">Trusted Methodology</h3>
              <p>
                Our proven review process ensures we filter out bias and
                highlight products loved by communities.
              </p>
            </div>

            <div className="bg-white p-8 rounded shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-12 h-12 text-blue-500 mb-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-xl font-bold mb-2">Curated Analysis</h3>
              <p>
                We compile diverse opinions and provide our own objective
                analysis to recommend the best option.
              </p>
            </div>

            <div className="bg-white p-8 rounded shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-12 h-12 text-blue-500 mb-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
              <h3 className="text-xl font-bold mb-2">Transparent Process</h3>
              <p>
                We are upfront about our review methodology so readers know how
                we reach our conclusions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

{
  /* Reviews button */
}
{
  /* <Link
            href="#"
            className="bg-white text-black py-2 px-6 rounded-full font-semibold hover:bg-gray-300"
          >
            Explore Reviews
          </Link> */
}
{
  /* Category Highlights */
}
{
  /* <section className="bg-gray-100 py-16 sm:px-6 lg:px-36">
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
      </section> */
}

{
  /* Reddit and YouTube Integrations */
}
{
  /* <section className="bg-white py-16 sm:px-6 lg:px-36">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Community Says</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              
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
      </section> */
}
