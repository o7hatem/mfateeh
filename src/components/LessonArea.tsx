import { useEffect, useState } from "react";
import { Layout } from "antd";

import NavBar from "./NavBar";

import { registerKey, updateClassName } from "../services/typing.service";

import "../styles/LessonArea.css";

type LessonAreaProps = {
  lessonText: string;
};

export default function LessonArea({ lessonText }: LessonAreaProps) {
  const [keyStrokes, setKeyStrokes] = useState<string[]>([]);

  const letterSpans = Array.from(lessonText).map((char, index) => {
    const className: string = updateClassName(char, index, keyStrokes);
    return (
      <span key={index} className={className}>
        {char}
      </span>
    );
  });

  const handleKeyDown = (e: KeyboardEvent) => {
    setKeyStrokes((prev) => registerKey(e, prev));
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <Layout>
        {/* The navbar should not be here. It should be a common component in each page */}
        {/* This should change once I add a router*/}
        <NavBar />

        <div className="lesson-container">
          <div className="lesson-text-container">
            <p>{letterSpans}</p>
          </div>
          <div className="heatmap-container">
            <p>HEATMAP</p>
          </div>
        </div>
      </Layout>
    </>
  );
}
