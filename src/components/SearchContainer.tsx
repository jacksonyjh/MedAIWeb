// SearchContainer.tsx
import React, { useState } from "react";
import SearchWindow from "./SearchWindow";
import SearchResults from "./SearchResults";

const SearchContainer = () => {
  const [searchData, setSearchData] = useState(null);

  const handleSearchData = (data: any) => {
    setSearchData(data);
  };

  return (

    <div>
      {console.log(searchData)}
      <SearchResults data={searchData} />
    </div>
  );
};

export default SearchContainer;
