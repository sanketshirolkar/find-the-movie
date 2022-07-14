import React, {useState, useEffect} from "react";
import axios from "axios";
import "./movieBanner.css";

const MovieBanner = () => {
const [movieList, setMovieList] = useState([]);

async function requestMovieList() {
  axios.post("https://hoblist.com/api/movieList", {category: "movies", language:"kannada", genre: "all", sort: "voting"})
    .then((response) => {
      setMovieList(response?.data?.result);
    }).catch((error) => {
      console.log(error);
    }) 
}

useEffect(() => {
    requestMovieList();
}, []);


  return (
    <div style={{marginTop:"40px"}}>
        {movieList?.map((movies) => (
          <div className="tbd" key={movies.id}>
            <div className="movie_banner_container">
              <div className="left_side">
                <div>
                  Up Arrow
                </div>
                <div>
                  1
                </div>
                <div>
                  Down Arrow
                </div>
              </div>

              <div className="poster">
                <img src={movies.poster} alt={movies.title} height="180px" width="240px" />
              </div> 

              <div className="right_side">
                <div>
                  {movies.title}
                </div>
                <div>
                  Genre: {movies.genre}
                </div>
                <div>
                  Director: {movies.director}
                </div>
                <div>
                  Starring: {movies.stars[0]}
                </div>
              </div> 
            </div>
            <div>
              <button>
                Watch Trailer
              </button>
            </div>
          </div>

        ))}
    </div>
  )
}

export default MovieBanner;