"use client";

import { useEffect, useRef } from "react";
import * as wasm from "@wasm/gameoflife";

const CELL_SIZE = 10;
const GRID_COLOR = "#ccc";
const DEAD_COLOR = "#fff";
const ALIVE_COLOR = "#000";

const Page = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const universeRef = useRef<wasm.Universe | null>(null);
  const animationIdRef = useRef<number | null>(null);

  useEffect(() => {
    const initWasm = async () => {
      let w = await wasm.default();
      const memory = w.memory;
      const universe = wasm.Universe.new(30, 50); // Example size
      universeRef.current = universe;
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = (universe.width() + 1) * CELL_SIZE + 1;
        canvas.height = (universe.height() + 1) * CELL_SIZE + 1;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          renderLoop(ctx, universe, memory);
        }
      }
    };

    initWasm();

    return () => {
      if (animationIdRef.current) {
        // cancelAnimationFrame(animationIdRef.current);
        clearTimeout(animationIdRef.current); // Use clearTimeout instead of cancelAnimationFrame
      }
    };
  }, []);

  const drawGrid = (ctx: CanvasRenderingContext2D, universe: wasm.Universe) => {
    ctx.beginPath();
    ctx.strokeStyle = GRID_COLOR;
    // Draw vertical grid lines
    for (let col = 0; col <= universe.width(); col++) {
      ctx.moveTo(col * CELL_SIZE + 1, 0);
      ctx.lineTo(col * CELL_SIZE + 1, universe.height() * CELL_SIZE + 1);
    }

    // Draw horizontal grid lines
    for (let row = 0; row <= universe.height(); row++) {
      ctx.moveTo(0, row * CELL_SIZE + 1);
      ctx.lineTo(universe.width() * CELL_SIZE + 1, row * CELL_SIZE + 1);
    }

    ctx.stroke();
  };

  const drawCells = (
    ctx: CanvasRenderingContext2D,
    universe: wasm.Universe,
    memory: WebAssembly.Memory,
  ) => {
    const cellsPtr = universe.cells();
    const cells = new Uint8Array(
      memory.buffer,
      cellsPtr,
      universe.width() * universe.height(),
    );

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Clear the canvas
    drawGrid(ctx, universe); // Draw the grid

    let idx = 0;
    for (let row = 0; row < universe.height(); row++) {
      for (let col = 0; col < universe.width(); col++) {
        ctx.fillStyle =
          cells[idx] === wasm.Cell.Dead ? DEAD_COLOR : ALIVE_COLOR;
        ctx.fillRect(
          col * CELL_SIZE + 1,
          row * CELL_SIZE + 1,
          CELL_SIZE - 1,
          CELL_SIZE - 1,
        );
        idx++;
      }
    }
  };

  const renderLoop = (
    ctx: CanvasRenderingContext2D,
    universe: wasm.Universe,
    memory: WebAssembly.Memory,
  ) => {
    const loop = () => {
      universe.tick(); // Advance the universe state
      drawCells(ctx, universe, memory); // Draw the cells
      // animationIdRef.current = requestAnimationFrame(loop); // Continue the loop
      animationIdRef.current = window.setTimeout(loop, 300); // Add delay using setTimeout
    };

    loop();
  };

  return <canvas ref={canvasRef}>test</canvas>;
};

export default Page;
