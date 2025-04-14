import { useState , useEffect } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import NavBar from "./components/NavBar";
import Recommendation from "./components/Recommendation";
import Watchlist from "./components/Watchlist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MovieContext } from "./context/MovieContext";


function App() {

  const [watchlist , setWatchlist] = useState([])

  function handleAddToWatchList(movieObj){
     let updatedWatchList = [...watchlist , movieObj]
     setWatchlist(updatedWatchList)
     localStorage.setItem('wlMovies', JSON.stringify(updatedWatchList))

  }


useEffect(()=>{
  const movies = localStorage.getItem('wlMovies')
  setWatchlist(JSON.parse(movies))
}, [])


  return (
    <div>
    <MovieContext.Provider value={{watchlist , handleAddToWatchList}}>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies  />
              </>
            }
          />
          <Route path="/watchlist" element={<Watchlist watchlist={watchlist} />} />
          <Route path="/recommend" element={<Recommendation />} />
        </Routes>
      </BrowserRouter>
      </MovieContext.Provider>
    </div>
  );
}

export default App;