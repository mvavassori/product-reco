import Link from "next/link";
import Image from "next/image";
import getFormattedDate from "@/lib/getFormattedDate";

export default function ListItem({ post }) {
  const { id, title, excerpt, date, thumbnail } = post;
  const formattedDate = getFormattedDate(date);
  return (
    <div
      key={id}
      className="bg-gray-100 dark:bg-slate-800 rounded-lg p-4 flex justify-between"
    >
      <div>
        <Link
          href={`/posts/${id}`}
          className="text-2xl font-bold hover:text-gray-600 dark:hover:text-gray-400"
        >
          {title}
        </Link>
        <p className="mt-2 text-gray-600 dark:text-gray-400">{excerpt}</p>
        <small className="text-xs font-semibold text-violet-700">
          Updated{" "}
        </small>
        <small className="text-xs text-gray-400">{formattedDate}</small>
      </div>
      <div className="">
        <Image
          src={thumbnail}
          alt={`${title} thumbanail's image`}
          width={180}
          height={180}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
