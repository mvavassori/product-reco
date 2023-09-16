import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";

function ListItem({ post }) {
  const { id, title, excerpt, date } = post;
  const formattedDate = getFormattedDate(date);
  return (
    <div key={id} className="bg-gray-100 dark:bg-slate-800 rounded-lg p-4">
      <Link
        href={`/posts/${id}`}
        className="text-xl font-bold hover:text-gray-600 dark:hover:text-gray-400"
      >
        {title}
      </Link>
      <p className="mt-2 text-gray-600 dark:text-gray-400">{excerpt}</p>
      <small className="text-gray-400 text-sm">{formattedDate}</small>
    </div>
  );
}

export default ListItem;
