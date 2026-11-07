import { Layout } from "antd";
const { Content } = Layout;

import NavBar from "./NavBar";
import LessonSection from "./LessonSection";
import type { Lesson } from "../types";
import { Type1Lesson } from "../services/lessons.service";

export default function HomePage() {
  const lessonList: Lesson[] = [
    {
      lessonName: "Lesson 1",
      lessonContent: Type1Lesson(["a", "b"]),
    },
    {
      lessonName: "Lesson 2",
      lessonContent: Type1Lesson(["c", "d"]),
    },
    {
      lessonName: "Lesson 3",
      lessonContent: Type1Lesson(["e", "f"]),
    },
  ];
  return (
    <>
      <Layout>
        <NavBar />

        <Content>
          <LessonSection
            sectionHeader="الصف المرجعي"
            sectionLessons={lessonList}
          />
          <LessonSection
            sectionHeader="الصف المرجعي"
            sectionLessons={lessonList}
          />
        </Content>
      </Layout>
    </>
  );
}
