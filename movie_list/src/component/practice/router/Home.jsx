import { Outlet } from "react-router-dom";

// src/component/practice/Home.jsx
function Home() {
  return (
    <div>
      <Outlet />
      <h1>Home</h1>
    </div>
  );
}

export default Home;
