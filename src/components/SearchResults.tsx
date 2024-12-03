// SearchResults.tsx
import React from "react";

interface Props {
  data: any;
}

const SearchResults = ({ data }: Props) => {
    console.log('Loading Search Results')
  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <h3>Search Results</h3>
      <ul>
        <li>Patient ID: {data.patientId}</li>
        <li>Patient Name: {data.patientName}</li>
        <li>Gender: {data.gender}</li>
        <li>Acquisition Date: {data.acqDate ? data.acqDate.toString() : "N/A"}</li>
        <li>PR Interval: {data.prInterval}</li>
        <li>QT Interval: {data.qtInterval}</li>
        <li>Ventricle Rate: {data.ventricleRate}</li>
      </ul>
    </div>
  );
};

export default SearchResults;
