import { Outlet } from "react-router-dom";

function Movie() {
  return (
    <div>
      <h1>Movie</h1>
      <Outlet />
    </div>
  );
}

export default Movie;
