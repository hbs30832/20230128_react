// src/api/tmdb.js
import axios from "axios";

export const tmdbAxios = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "85fea83f6dccd3a4886a74026c5c3804",
  },
});

// tmdbAxios.get("trending/tv/week")
//     => "https://api.themoviedb.org/3/trending/tv/week?api_key=키값"
