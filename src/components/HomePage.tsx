import { Layout } from "antd";
const { Content } = Layout;

import NavBar from "./NavBar";
import LessonSection from "./LessonSection";

export default function HomePage() {
  return (
    <>
      <Layout>
        <NavBar />

        <Content>
          <LessonSection
            sectionHeader="الصف المرجعي"
            sectionLessons={["lesson1", "lesson2", "lesson3"]}
          />
          <LessonSection
            sectionHeader="الصف المرجعي"
            sectionLessons={["lesson4", "lesson5", "lesson6"]}
          />
        </Content>
      </Layout>
    </>
  );
}
