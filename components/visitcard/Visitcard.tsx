import React from "react";
import { colors } from "@/assets/colors";

const Visitcard: React.FC = () => {
  return (
    <div
      style={{
        width: 300,
        aspectRatio: 16 / 9,
        border: `2px solid ${colors.border}`,
        padding: 15,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        zIndex: 10,
        backgroundColor: colors.sepehrOrange,
        opacity: 0.9,
        borderRadius: 3,
        perspective: 1000,
        boxShadow: "0 30vh 50px 4px black",
      }}
    >
      <h1 className="text-2xl">Amin Karkhi</h1>
      <h2 className="text-1xl">Software Engineer</h2>
      <h2 className="text-1xl">Data Engineer (BigData & AI)</h2>
      <h3 className="text-1xl">Full Stack Developer</h3>
      <span
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
        }}
      >
        <h4 className="text-xs">FrontEnd</h4>
        <h4 className="text-xs">BackEnd</h4>
        <h4 className="text-xs">DevOps</h4>
      </span>
    </div>
  );
};

export default Visitcard;
