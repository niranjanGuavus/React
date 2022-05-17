import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import axios from "axios";

function App() {
  const baseUrl = "https://swapi.dev/api/film";
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  //Get movies through promise
  // function getMovies() {
  //   fetch(baseUrl)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const movieResult = data.results.map((item) => {
  //         return {
  //           id: item.episode_id,
  //           title: item.title,
  //           releaseDate: item.release_date,
  //           openingText: item.opening_crawl,
  //         };
  //       });
  //       setMovies(movieResult);
  //     })
  //     .catch((error) => {
  //       console.log(`error :: ` + error);
  //     });
  // }

  //get movies through async and wait
  // async function getMovieInfo() {
  //   setLoading(true);
  //   const response = await fetch(baseUrl);
  //   const result = await response.json();
  //   const movieResult = result.results.map((item) => {
  //     return {
  //       id: item.episode_id,
  //       title: item.title,
  //       releaseDate: item.release_date,
  //       openingText: item.opening_crawl,
  //     };
  //   });
  //   setMovies(movieResult);
  //   setLoading(false);
  // }

  //Get movies through axious
  function getMoviesList() {
    setLoading(true);
    setError(false);
    axios
      .get(baseUrl)
      .then((data) => {
        const movieResult = data.data.results.map((item) => {
          return {
            id: item.episode_id,
            title: item.title,
            releaseDate: item.release_date,
            openingText: item.opening_crawl,
          };
        });
        setLoading(false);
        setMovies(movieResult);
        
      }).catch((error) => {
        setLoading(false);
        console.error(error);
        setError(true);
      });

     
  }

  let content = <MoviesList movies={movies} />

  if(isLoading) {
    content = <p>Loading...</p>
  } else if(isError) {
    content = <p>Error...</p>
  } else if(movies.length ===0){
    content = <p>No data available.</p>;
  }

  


  return (
    <React.Fragment>
      <section>
        <button onClick={getMoviesList}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
