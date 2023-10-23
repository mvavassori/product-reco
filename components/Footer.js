import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-4 sm:px-6 lg:px-8 pt-4 border-t-2 bg-gray-50">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <Link href="/" className="text-xl font-bold">
            <span className="">standard</span>
            <span className="text-red-600">pick</span>
            <span className="text-xs">.com</span>
          </Link>

          <div className="mt-6 lg:max-w-xl">
            <p className="text-sm text-gray-800">
              We simplify purchase decisions by curating the most loved products
              based on community insights. Our in-depth analysis of authentic
              user reviews helps you cut through the noise and find the right
              choice for your needs.
            </p>
          </div>
        </div>
        <div>
          <p className="text-base font-bold tracking-wide text-gray-900">
            Contacts
          </p>
          <div className="flex">
            <p className="mr-1 text-gray-800">email:</p>
            <a
              href="mailto:hello@standardpick.com"
              className=""
              target="_blank"
              rel="noopener noreferrer"
            >
              hello@standardpick.com
            </a>
          </div>
        </div>
        <div>
          <Link
            className="text-base font-bold tracking-wide text-gray-900"
            href="/posts"
          >
            All Articles
          </Link>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-600">
          © Copyright 2023 Standardpick. All rights reserved.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <Link
              href="/privacy-policy"
              className="text-sm text-gray-600 transition-colors
              duration-300 hover:text-deep-purple-accent-400"
            >
              Privacy &amp; Cookies Policy
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
