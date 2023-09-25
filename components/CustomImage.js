import Image from "next/image";

export default function CustomImage({ src, alt, priority }) {
  const prty = priority ? true : false;

  return (
    <div className="w-full">
      <Image
        className="rounded-lg mx-auto"
        src={src}
        alt={alt}
        width={600}
        height={400}
        priority={prty}
      />
    </div>
  );
}
