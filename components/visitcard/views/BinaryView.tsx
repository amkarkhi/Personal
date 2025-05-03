"use client";

import React, { useEffect, useRef, useState } from "react";
import LoadingComponent from "../LoadingComponent";

const BinaryView = () => {
  const [isClient, setIsClient] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(typeof window === "undefined");
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      if (ref.current) {
        const bound = ref.current.getBoundingClientRect();
        ref.current.innerText = `${generateRandomString(
          (bound.width * bound.height) / 100,
        )}`;
      }
    }, 100);
    return () => {
      clearInterval(t);
    };
  }, []);

  return isClient ? (
    <LoadingComponent />
  ) : (
    <div
      style={{ zIndex: -1 }}
      className="animate-fade-in animate-blink-opacity  bg-black fixed inset-0 z-0 break-words w-screen h-screen text-red-500 overflow-hidden isolate"
    >
      <div
        ref={ref}
        style={{
          WebkitMaskImage:
            "radial-gradient(circle at 50% 50%,black 10%, transparent 80%)",
          WebkitMaskSize: ".8em .4em",
          textShadow: ".9em .3em 1px red",
        }}
        className="bg-black fixed inset-0 z-0 break-words w-screen h-screen text-red-500 overflow-hidden isolate"
      />

      <div
        style={{
          zIndex: 2,
          content: "",
          WebkitMaskImage: "radial-gradient(grey ,black)",
          background: "radial-gradient(black 50%,red 80% )",
          WebkitMaskSize: "1em 1em",
          backgroundPosition: "50vw 33vh",
        }}
        className="absolute inset-0 break-words w-screen h-screen overflow-hidden opacity-40"
      />

      <div
        style={{
          zIndex: 3,
          content: "",
          background: "radial-gradient(transparent 30% , black 65%)",
        }}
        className="absolute inset-0 break-words w-screen h-screen overflow-hidden"
      />
    </div>
  );
};

const AllAlphabets =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generateRandomString(length: number) {
  let result = "";
  const charactersLength = AllAlphabets.length;
  for (let i = 0; i < length; i++) {
    result += AllAlphabets.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export default BinaryView;
