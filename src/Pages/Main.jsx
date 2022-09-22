import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../Request";

function Main(props) {
  const [movies, setMovies] = useState;
  const movie = movies[Math.floor(Math.random()*movies.length)]

  useEffect(() => {
    axios.get(requests?.requestPopular).then((res) => {
        console.log('res',res.data)
      setMovies(res?.data);
    });
  }, []);
  console.log("movies", movie);
  return <div>MAin</div>;
}

export default Main;
