import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./components/Homepage";
import SearchWindow from "./components/SearchWindow";
import SearchResults from "./components/SearchResults";
import SearchContainer from "./components/SearchContainer";

const App = () => {
  const [HomepageVisibility, setHomepageVisibility] = useState(true);
  const [searchVisibility, setSearchVisibility] = useState(false);
  const [displayResults, setDisplayResults] = useState(false);
  return (
    <div className="container">
      <Navbar
        onLogoClick={() => {setHomepageVisibility(true); setSearchVisibility(false); setDisplayResults(false)}}
        onSearchClick={() => {setSearchVisibility(true); setHomepageVisibility(false); setDisplayResults(false)}}
      ></Navbar>
      {HomepageVisibility && <Homepage></Homepage>}
      {searchVisibility && <SearchWindow onSearchClick={() => setDisplayResults(true)}></SearchWindow>}
      {displayResults && <SearchContainer/>}
    </div>
  );
};

export default App;
