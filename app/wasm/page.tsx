"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import * as wasm from "@wasm/gameoflife";
// import { useMirrored } from "@/components/visitcard/views/MainView";

const Page = () => {
  // const isMirrored = useMirrored();
  const canvasRef = useRef<HTMLPreElement>(null);
  const [canvas, setCanvas] = useState<wasm.Universe | null>(null);

  useEffect(() => {
    wasm
      .default()
      .then(() => {
        const universe = wasm.Universe.new(66, 20);
        setCanvas(universe);
      })
      .catch(console.log);
  }, []);

  const renderloop = useCallback(() => {
    if (canvasRef?.current && canvas) {
      canvasRef.current.textContent = canvas.render();
      canvas.tick();
      requestAnimationFrame(renderloop);
    }
  }, [canvas, canvasRef]);

  useEffect(renderloop, [renderloop]);

  return (
    <div
      style={{
        fontSize: "1em",
        overflow: "hidden",
        border: "1px solid white",
        filter: "blur(1px)",
      }}
    >
      <pre
        style={{
          width: "40em",
          height: "30em",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        ref={canvasRef}
      >
        test
      </pre>
    </div>
  );
};

export default Page;
