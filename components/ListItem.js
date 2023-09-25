import Link from "next/link";
import Image from "next/image";
import getFormattedDate from "@/lib/getFormattedDate";

export default function ListItem({ post }) {
  const { id, title, excerpt, date, thumbnail } = post;
  const formattedDate = getFormattedDate(date);
  return (
    <div key={id} className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4 flex flex-col h-full">
        <div className="relative overflow-hidden aspect-ratio-3/2">
          <Link href={`/posts/${id}`}>
            <Image
              width={300}
              height={200}
              quality={100}
              priority={true}
              src={thumbnail}
              alt={`${title} thumbnail's image`}
              className="w-full h-full object-cover object-center rounded-lg"
            />
          </Link>
        </div>
        <Link
          href={`/posts/${id}`}
          className="text-2xl font-bold hover:text-gray-600 dark:hover:text-gray-400 mt-4 block"
        >
          {title}
        </Link>
        <p className="text-gray-700">{excerpt}</p>
        <div className="mt-auto">
          <small className="text-xs font-semibold text-violet-700">
            Updated {""}
          </small>
          <small className="text-xs text-gray-400">{formattedDate}</small>
        </div>
      </div>
    </div>
  );
}

// <div
//   key={id}
//   className="bg-gray-100 dark:bg-slate-800 rounded-lg p-4 flex justify-between"
// >
//   <div className="lg:max-w-md md:max-w-sm sm:max-w-xs">
// <Link
//   href={`/posts/${id}`}
//   className="text-2xl font-bold hover:text-gray-600 dark:hover:text-gray-400"
// >
//   {title}
// </Link>
//     <p className="mt-2 text-gray-600 dark:text-gray-400 xs:text-xs">
//       {excerpt}
//     </p>
//     <small className="text-xs font-semibold text-violet-700">
//       Updated{" "}
//     </small>
//     <small className="text-xs text-gray-400">{formattedDate}</small>
//   </div>
//   <div className="">
//     <Image
//       src={thumbnail}
//       alt={`${title} thumbanail's image`}
//       width={180}
//       height={180}
//       className="rounded-lg w-36"
//     />
//   </div>
// </div>
