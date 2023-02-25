import { Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import Movie from "./components/pages/Movie";
import TV from "./components/pages/TV";
import People from "./components/pages/People";
import styled from "styled-components";
import Home from "./components/pages/Home";
import MovieList from "./components/movie/MovieList";
import MovieDetail from "./components/movie/MovieDetail";

function App() {
  return (
    <div>
      <Header />
      <MainSection>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<Movie />}>
            <Route path="" element={<MovieList />} />
            <Route path=":id" element={<MovieDetail />} />
          </Route>
          <Route path="/tv" element={<TV />} />
          <Route path="/people" element={<People />} />
        </Routes>
      </MainSection>
    </div>
  );
}

const MainSection = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

export default App;
