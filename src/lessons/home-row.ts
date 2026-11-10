import { Type1LessonText, Type2LessonText } from "../services/lessons.service";
import type { Lesson } from "../types";

export const home_row_section: Lesson[] = [
  {
    lessonIndex: 1,
    lessonName: "F and J",
    lessonContent: Type1LessonText(["f", "j"]),
  },
  {
    lessonIndex: 2,
    lessonName: "D and K",
    lessonContent: Type1LessonText(["d", "k"]),
  },
  {
    lessonIndex: 3,
    lessonName: "S and L",
    lessonContent: Type1LessonText(["s", "l"]),
  },
  {
    lessonIndex: 4,
    lessonName: "Words Text",
    lessonContent: Type2LessonText(["s", "l"]),
  },
];
