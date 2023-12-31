import { getPostsMeta } from "@/lib/posts";
import ListItem from "@/components/ListItem";

export default async function AllPosts() {
  const posts = await getPostsMeta();

  if (!posts) {
    return <p className="mt-10 text-center">Sorry, no posts available.</p>;
  }
  return (
    <section className="container mx-auto my-6 sm:px-6 lg:px-36">
      <h2 className="mt-8 mb-6 text-4xl font-bold text-center">All Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
