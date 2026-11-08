import { Type1Lesson } from "../services/lessons.service";
import type { Lesson } from "../types";

export const home_row_section: Lesson[] = [
  {
    lessonIndex: 1,
    lessonName: "F and J",
    lessonContent: Type1Lesson(["f", "j"]),
  },
  {
    lessonIndex: 2,
    lessonName: "D and K",
    lessonContent: Type1Lesson(["d", "k"]),
  },
  {
    lessonIndex: 3,
    lessonName: "S and L",
    lessonContent: Type1Lesson(["s", "l"]),
  },
];
