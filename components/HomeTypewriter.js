"use client";
import { useEffect, useState } from "react";

export default function HomeTypewriter() {
  const words = [
    "best running shoes 2023 reddit",
    "best chef's knives reddit",
    "best laptop 2023 reddit",
    "best smartphone 2023 reddit",
    "best endurance bike for beginners reddit",
  ];
  let i = 0;
  let j = 0;
  let currentWord = "";
  let isDeleting = false;

  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  const type = () => {
    currentWord = words[i];
    if (isDeleting) {
      setText(currentWord.substring(0, j - 1));
      j--;
      if (j === 0) {
        isDeleting = false;
        i++;
        if (i === words.length) {
          i = 0;
        }
      }
    } else {
      setText(currentWord.substring(0, j + 1));
      j++;
      if (j === currentWord.length) {
        // Wait 2.5 seconds before deleting the word
        setTimeout(() => {
          isDeleting = true;
        }, 2500);
      }
    }
    setShowCursor(!showCursor); // Toggle the cursor

    // Adjust the timeout for typing and deleting
    setTimeout(type, isDeleting ? 25 : 100); // Typing is faster than deleting
  };

  useEffect(() => {
    type();
  }, []);

  return (
    <section className="p-4 bg-white text-left rounded-full border-2 border-gray-700 lg:max-w-3xl mx-auto">
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="mr-3"
        >
          <path
            fill="currentColor"
            d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3l-1.4 1.4ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"
          />
        </svg>
        <h1 className="text-2xl font-bold ">
          {text}
          <span
            className={`cursor-blink ${
              showCursor ? "opacity-100" : "opacity-0"
            }`}
          >
            |
          </span>
        </h1>
      </div>
    </section>
  );
}
