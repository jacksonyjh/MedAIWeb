import React from "react";
import SearchResults from "./SearchResults";

interface Props {
  searchData: any[];
}

const SearchContainer = ({ searchData }: Props) => {
  return (
    <div>
      <SearchResults data={searchData} />
    </div>
  );
};

export default SearchContainer;
