import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Watchlist } from "./components/Watchlist";
import { Watched } from "./components/Watched";
import { Add } from "./components/Add";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  // State for storing movies and search value
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  // Function to fetch movies from OMDB API based on search value
  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=a59a20fe`;
    const response = await fetch(url);
    const responseJson = await response.json();
    
    // Update state with fetched movies
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    } else {
      setMovies([]);
    }
  };

  // Use effect to fetch movies when search value changes
  useEffect(() => {
    if (searchValue) {
      getMovieRequest(searchValue);
    }
  }, [searchValue]);

  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Watchlist />} />
          <Route path="/add" element={<Add searchValue={searchValue} setSearchValue={setSearchValue} movies={movies} />} />
          <Route path="/watched" element={<Watched />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
