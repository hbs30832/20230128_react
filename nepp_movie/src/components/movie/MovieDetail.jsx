import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { tmdbAxios } from "../../api/tmdb";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    tmdbAxios.get("/movie/" + id).then((res) => setMovie(res.data));
  }, [id]);

  if (!movie) return <div>로딩 중...</div>;
  return <div>{movie.title}</div>;
}

export default MovieDetail;
