import Image from "next/image";
import Link from "next/link";

export default function CustomImage({ src, alt, priority, link }) {
  const prty = priority ? true : false;

  return (
    <div className="w-full">
      <Link href={link} target="_blank" rel="noopener noreferrer">
        <Image
          className="rounded-lg mx-auto"
          src={src}
          alt={alt}
          width={600}
          height={400}
          priority={prty}
        />
      </Link>
    </div>
  );
}
