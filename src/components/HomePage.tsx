import { Layout } from "antd";
const { Content } = Layout;

import LessonSection from "./LessonSection";
import { home_row_section } from "../lessons/home-row";

export default function HomePage() {
  return (
    <>
      <Content>
        <LessonSection
          sectionHeader="الصف المرجعي"
          sectionLessons={home_row_section}
        />
        <LessonSection
          sectionHeader="الصف المرجعي"
          sectionLessons={home_row_section}
        />
      </Content>
    </>
  );
}
