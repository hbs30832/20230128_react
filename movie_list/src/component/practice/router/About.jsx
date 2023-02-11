import { Link, Route, Routes } from "react-router-dom";
import Detail from "./Detail";

function About() {
  return (
    <div>
      <h1>About</h1>
      <Routes>
        <Route path="" element={<AboutList />} />
        <Route path=":id" element={<Detail />} />
      </Routes>
    </div>
  );
}

const AboutList = () => {
  return (
    <ul>
      <li>
        <Link to="1">게시글 1</Link>
      </li>
      <li>
        <Link to="2">게시글 2</Link>
      </li>
      <li>
        <Link to="3">게시글 3</Link>
      </li>
    </ul>
  );
};

export default About;
