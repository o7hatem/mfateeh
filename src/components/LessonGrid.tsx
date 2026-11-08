import { Link } from "react-router-dom";
import "../styles/LessonSection.css";
import type { Lesson } from "../types";
import { logger } from "../lib/logger";

type LessonGridProps = {
  lessons: Lesson[];
};

export default function LessonGrid({ lessons }: LessonGridProps) {
  return (
    <>
      <div className="lesson-grid-container">
        {lessons.map((lesson: Lesson) => {
          logger.debug(
            `The value for lesson.lessonIndex ${lesson.lessonIndex}`,
          );
          return (
            <Link to={`/lesson/${lesson.lessonIndex}`}>
              {lesson.lessonName}
            </Link>
          );
        })}
      </div>
    </>
  );
}
