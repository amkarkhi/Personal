"use client";

import { useEffect } from "react";
import * as wasm from "@wasm/gameoflife";
import { useMirrored } from "@/components/visitcard/views/MainView";

const Page = () => {
  const isMirrored = useMirrored();

  useEffect(() => {
    if (isMirrored) {
      wasm
        .default()
        .then(() => {
          wasm?.greet("Amin");
        })
        .catch(console.log);
    }
  }, [isMirrored]);

  return <div>{isMirrored ? "test" : "ffffffffffffffffffffffff"}</div>;
};

export default Page;
