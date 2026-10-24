import "./App.css";
import LessonArea from "./components/LessonArea";
import { Type2Lesson } from "./services/lessons.service";

function App() {
  // const lessonText =
  //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi minus vitae corrupti voluptate beatae, magnam aliquid ut saepe reiciendis vero, odit doloribus dignissimos libero id eaque fuga. Laudantium, at asperiores?";olor sit amet cI
  // const lessonText = Type0Lesson("l");
  // const lessonText = Type1Lesson(["f", "j"]);
  const lessonText = Type2Lesson(["f", "j", "k", "d"]);
  return <LessonArea lessonText={lessonText} />;
}

export default App;
