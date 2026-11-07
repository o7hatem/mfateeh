import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import { Type2Lesson } from "./services/lessons.service";
import { Layout } from "antd";
import { Route, Routes } from "react-router-dom";

function App() {
  // const lessonText =
  //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi minus vitae corrupti voluptate beatae, magnam aliquid ut saepe reiciendis vero, odit doloribus dignissimos libero id eaque fuga. Laudantium, at asperiores?";olor sit amet cI
  // const lessonText = Type0Lesson("l");
  // const lessonText = Type1Lesson(["f", "j"]);
  const lessonText = Type2Lesson(["ب", "ت", "ي", "d"]);
  // const lessonText = "هل أنت سعيد؟";

  return (
    <>
      <Layout>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
