import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./components/Homepage";
import SearchWindow from "./components/SearchWindow";

const App = () => {
  const [HomepageVisibility, setHomepageVisibility] = useState(true);
  return (
    <div className="container">
      <Navbar
        onLogoClick={() => setHomepageVisibility(true)}
        onSearchClick={() => setHomepageVisibility(false)}
      ></Navbar>
      {HomepageVisibility && <Homepage></Homepage>}
      {!HomepageVisibility && <SearchWindow></SearchWindow>}
    </div>
  );
};

export default App;
