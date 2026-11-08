import { useEffect, useState } from "react";
import { Layout } from "antd";

import { registerKey, updateClassName } from "../services/typing.service";

import { home_row_section } from "../lessons/home-row";
import "../styles/LessonArea.css";
import { useParams } from "react-router-dom";
import { logger } from "../lib/logger";

export default function LessonArea() {
  const { lessonId } = useParams();
  const id = parseInt(lessonId ? lessonId : "1");

  logger.debug(`Lesson with param ${id} is being called`);
  logger.debug(`Lesson with index ${lessonId} is being called`);

  const lessonText = home_row_section[id - 1].lessonContent;

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
        <div className="lesson-container">
          <div className="lesson-text">
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
