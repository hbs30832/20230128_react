import { Route, Routes } from "react-router-dom";
import Post from "./component/practice/post/Post";
import PostDetail from "./component/practice/post/PostDetail";
import PostEdit from "./component/practice/post/PostEdit";
import PostList from "./component/practice/post/PostList";
import About from "./component/practice/router/About";
import Header from "./component/practice/router/Header";
import Home from "./component/practice/router/Home";

function App() {
  return (
    <>
      <Header />
      {/* Routes와 Route를 통해서 주소에 따라 보여줄 컴포넌트를 나눈다. */}
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path=":id" element={<div>나타납니다</div>} />
        </Route>
        <Route path="about/*" element={<About />} />
        <Route path="post" element={<Post />}>
          <Route path="" element={<PostList />} />
          <Route path="edit" element={<PostEdit />} />
          <Route path=":id" element={<PostDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
