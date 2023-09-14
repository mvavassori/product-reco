import { getSortedPostsData } from "@/lib/posts";
import ListItem from "@/components/ListItem";

export default function Posts() {
  const posts = getSortedPostsData();
  return (
    <section className="container mx-auto my-6">
      <h2 className="mt-8 mb-6 text-4xl font-bold text-center">Latest posts</h2>

      {posts.length === 0 ? (
        <p>No posts yet...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <ListItem key={posts.id} post={post} />
          ))}
        </div>
      )}
    </section>
  );
}
