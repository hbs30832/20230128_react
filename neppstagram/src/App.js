import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import MainSection from "./components/common/MainSection";
import Auth from "./components/pages/Auth";
import Edit from "./components/pages/Edit";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Post from "./components/pages/Post";
import Profile from "./components/pages/Profile";
import Search from "./components/pages/Search";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <div>
      <Routes>
        {/* Auth 컴포넌트는 Header 안보여줌 */}
        <Route path="/auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
        <Route path="/" element={<MainSection />}>
          <Route path="" element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="edit" element={<Edit />} />
          <Route path="profile" element={<Profile />} />
          <Route path="posts/:id" element={<Post />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
