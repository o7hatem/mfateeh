import LessonGrid from "./LessonGrid";

import { type Lesson } from "../types";

import "../styles/LessonSection.css";

type LessonSectionProps = {
  sectionHeader: string;
  sectionLessons: Lesson[];
};

export default function LessonSection({
  sectionHeader,
  sectionLessons,
}: LessonSectionProps) {
  return (
    <>
      <div className="lesson-section-wrapper">
        <h1 className="lesson-section-header">{sectionHeader}</h1>
        <LessonGrid lessons={sectionLessons} />
      </div>
    </>
  );
}
