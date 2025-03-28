"use client";
import React from "react";
import { cn } from "../../lib/utils";  // Relative Import


export const Boxes = React.memo(() => {
  const rows = new Array(10).fill(0);
  const cols = new Array(10).fill(0);

  const getRandomColor = () => {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 70%, 50%)`;
  };

  return (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
      {rows.map((_, i) => (
        <div key={i} className="flex">
          {cols.map((_, j) => (
            <div
              key={`${i}-${j}`}
              className={cn(
                "w-16 h-16 border-[1px] relative transition-all duration-200 ease-out",
                "hover:z-20 hover:scale-105"
              )}
              style={{
                borderColor: "rgba(255,255,255,0.1)",
                backgroundColor: getRandomColor(),
                opacity: Math.random() * 0.2 + 0.1,
                transform: `rotate(${Math.random() * 20 - 10}deg)`,
                transition: "all 0.3s ease-out"
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
});

Boxes.displayName = "Boxes";
