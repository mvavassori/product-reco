import { compileMDX } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import YoutubeVideo from "@/components/YoutubeVideo";
import CustomImage from "@/components/CustomImage";
import RedditEmbed from "@/components/RedditEmbed";

// Overall, these functions are used to fetch and process the content and metadata of blog posts from a GitHub repository.
// In summary, the getPostByName function fetches the content of a specific file from a GitHub repository, compiles the content using the compileMDX function, extracts the metadata from the frontmatter, and returns an object containing the metadata and compiled content of the file.
export async function getPostByName(fileName) {
  const res = await fetch(
    `https://raw.githubusercontent.com/mvavassori/blog-posts-product-reco/master/${fileName}`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );

  if (!res.ok) return undefined;

  const rawMDX = await res.text();

  if (rawMDX === "404: Not Found") return undefined;

  const { frontmatter, content } = await compileMDX({
    source: rawMDX,
    components: {
      YoutubeVideo,
      CustomImage,
      RedditEmbed,
    },
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: "wrap",
            },
          ],
        ],
      },
    },
  });

  const id = fileName.replace(/\.mdx$/, "");

  const blogPostObj = {
    meta: {
      id,
      title: frontmatter.title,
      date: frontmatter.date,
      excerpt: frontmatter.excerpt,
      tldr: frontmatter.tldr,
      thumbnail: frontmatter.thumbnail,
    },
    content,
  };

  return blogPostObj;
}

// In summary, the getPostsMeta function fetches the file tree of a GitHub repository, filters out the paths of files with the .mdx extension, retrieves the metadata of each file by calling the getPostByName function, and returns an array of post metadata sorted by date in descending order.
export async function getPostsMeta() {
  const res = await fetch(
    "https://api.github.com/repos/mvavassori/blog-posts-product-reco/git/trees/master?recursive=1",
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );

  if (!res.ok) return undefined;

  const repoFiletree = await res.json();

  console.log("repoFileTree", repoFiletree);

  const filesArray = repoFiletree.tree
    .map((obj) => obj.path)
    .filter((path) => path.endsWith(".mdx"));

  console.log("filesArray", filesArray);

  const posts = [];

  for (const file of filesArray) {
    const post = await getPostByName(file);
    if (post) {
      const { meta } = post;
      posts.push(meta);
    }
  }

  console.log("Posts:", posts);

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}
