import "../styles/LessonSection.css";

type LessonGridProps = {
  lessons: string[];
};

export default function LessonGrid({ lessons }: LessonGridProps) {
  return (
    <>
      <div className="lesson-grid-container">
        {lessons.map((lesson) => (
          <p>{lesson}</p>
        ))}
      </div>
    </>
  );
}
