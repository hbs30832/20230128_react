// src/api/tmdb.js
import axios from "axios";

export const tmdbAxios = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: process.env.REACT_APP_TMDB_API_KEY,
  },
});

// tmdbAxios.get("trending/tv/week")
//     => "https://api.themoviedb.org/3/trending/tv/week?api_key=키값"
