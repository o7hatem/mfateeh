import "../styles/LessonSection.css";
import type { Lesson } from "../types/lessons.types";

type LessonGridProps = {
  lessons: Lesson[];
};

export default function LessonGrid({ lessons }: LessonGridProps) {
  return (
    <>
      <div className="lesson-grid-container">
        {lessons.map((lesson: Lesson) => (
          // This should be converted to a button
          <div>
            <p>{lesson.lessonName}</p>
          </div>
        ))}
      </div>
    </>
  );
}
