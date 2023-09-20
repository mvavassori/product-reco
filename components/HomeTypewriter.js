"use client";
import { useEffect, useState } from "react";

export default function HomeTypewriter() {
  const words = [
    "best chef's knives reddit",
    "best laptop 2023 reddit",
    "best kettles bifl",
    "best pots and pans reddit",
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
    <section className="pt-4 container mx-auto text-center">
      <h1 className="text-4xl font-bold">
        {text}
        <span
          className={`cursor-blink ${showCursor ? "opacity-100" : "opacity-0"}`}
        >
          |
        </span>
      </h1>
    </section>
  );
}
