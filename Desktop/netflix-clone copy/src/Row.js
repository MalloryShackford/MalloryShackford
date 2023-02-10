import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css"


const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL, isLargeRow }) {
    const [movies, setMovies] = useState([]);

    //code with runs based on a specific condition/variable
    useEffect(() => {
        //if [fetchURL] is [], run once when row loads, and don't run again 
        async function fetchData(){
            const request = await axios.get(fetchURL);
                console.log(request.data.results);
                setMovies(request.data.results);
                return request;
        }
        fetchData();
    }, [fetchURL]);
    console.log(movies);

    return (
        <div className="row">
            <h2>{title}</h2>
            
            <div className="row_posters">
                {movies.map(movie => (
                    <img 
                        key={movie.id}
                        className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                        alt={movie.name}
                    />
                ))}
            </div>

          

        </div>
    )
}

export default Row


    // const handleClick = (movie) => {
    //     if (trailerUrl) {
    //         setTrailerUrl('');
    //     }else {
    //         movieTrailer(movie?.name || "")
    //         .then(url => {
    //             const urlParams = new URLSearchParams(new URL(url).search);
    //             setTrailerUrl(urlParams.get('v'));
    //         }).catch((error) => console.log(error) );
    //     }
    //     }
    // };

    //      return (
    //         <div className="row">
    //         <h2>{title}</h2>
            
    //         <div className="row_posters">
    //             {movies.map(movie => (
    //                 <img 
    //                     key={movie.id}
    //                     onClick={() => handleClick(movie)}
    //                     className={`row_poster ${isLargeRow && "row_posterLarge"}`}
    //                     src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
    //                     alt={movie.name}
    //                 />
    //             ))}
    //         </div>
    //          <YouTube videoId={trailerUrl} opts={opts} />