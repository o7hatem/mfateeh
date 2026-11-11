import { Layout } from "antd";
const { Content } = Layout;

import LessonSection from "./LessonSection";
import { home_row_lessons } from "../lessons/home-row";

export default function HomePage() {
  return (
    <>
      <Content>
        <LessonSection
          sectionHeader="الصف المرجعي"
          sectionLessons={home_row_lessons}
        />
        <LessonSection
          sectionHeader="الصف المرجعي"
          sectionLessons={home_row_lessons}
        />
      </Content>
    </>
  );
}
