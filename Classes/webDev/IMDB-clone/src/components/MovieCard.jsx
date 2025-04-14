import React, { useState } from "react";
import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";


function MovieCard({ movieObj}) {
  // function which will check if
  // the movie exists inside the watchlist
  // if movie is found return true - X
  // if movie is not found return false - addition

 const {watchlist , handleAddToWatchList} =  useContext(MovieContext)


  function doesContain() {
    for (let i = 0; i <watchlist.length; i++) {
      if (watchlist[i].id === movieObj.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div
      className="h-[40vh] w-[200px] bg-cover flex flex-col justify-end rounded-lg hover:scale-105 shadow-lg hover:shadow-2xl transition-transform duration-300"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movieObj.poster_path})`,
      }}
    >
      <div className="flex items-center justify-between p-2 w-full bg-gradient-to-t from-black/70 to-transparent rounded-b-lg">
        {doesContain() ? (
          <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-gray-900/60 text-white text-lg">
            &#10060;
          </div>
        ) : (
          <div
            onClick={() =>handleAddToWatchList(movieObj)}
            className="flex items-center justify-center h-8 w-8 rounded-lg bg-gray-900/60 text-white text-lg"
          >
            &#128525;
          </div>
        )}

        <div className="text-white text-center text-lg font-semibold truncate w-full">
          {movieObj.title}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;