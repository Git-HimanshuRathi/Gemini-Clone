import React, { useEffect, useState } from "react";
import { genreids } from "../utlities/genres";

function Watchlist({ watchlist }) {
  const [search, setSearch] = useState("");
  const [currGenre, setCurrGenre] = useState("All Genres");
  const [genreList, setGenreList] = useState([]);

  const handleGenre = (newGenre) => {
    setCurrGenre(newGenre);
  };

  useEffect(() => {
    let genresWithDuplicacy = watchlist.map((movieObj) => {
      return genreids[movieObj.genre_ids[0]];
    });

    const genres = new Set(genresWithDuplicacy);

    setGenreList(["All Genres", ...genres]);
  }, [watchlist]);

  return (
    <>
      {/* Genre Based Filtering */}

      <div className="flex justify-center m-4">
        {genreList.map((genre) => {
          return (
            <div
              onClick={() => handleGenre(genre)}
              className={
                currGenre == genre
                  ? "mx-4 flex justify-center items-center bg-blue-400 h-[3rem] w-[9rem] text-white font-bold border rounded-xl"
                  : "mx-4 flex justify-center items-center bg-gray-400 h-[3rem] w-[9rem] text-white font-bold border rounded-xl"
              }
            >
              {genre}
            </div>
          );
        })}
      </div>

      {/* Search Field */}

      <div className="flex justify-center my-10">
        <input
          placeholder="Search Movies"
          className="h-[3rem] w-[18rem] bg-gray-200 px-4 outline-none border border-slate-600"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Watchlist Table */}

      <div className="m-8">
        <table className="w-full text-center ">
          <thead className="border border-gray-200 rounded-lg bg-gray-200">
            <tr>
              <th>Name</th>
              <th>Ratings</th>
              <th>Popularity</th>
              <th>Genre</th>
              <th>Delete Movies</th>
            </tr>
          </thead>

          <tbody>
            {watchlist
              .filter((movieObj)=>{
                if(currGenre==='All Genres'){
                  return true
                }else{
                return currGenre == genreids[movieObj.genre_ids[0]]
                }
              }).filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr className="border-b-2">
                    <td className="flex items-center px-6 py-4">
                      <img
                        className="h-[6rem] w-[10rem]"
                        src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                      />
                      <div className="mx-10">{movieObj.title}</div>
                    </td>

                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{genreids[movieObj.genre_ids[0]]}</td>

                    <td className="text-red-500">Delete</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;