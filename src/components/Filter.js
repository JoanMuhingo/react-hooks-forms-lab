import React, {useState} from "react";

function Filter({ onCategoryChange, onSearchChange }) {
  const[searchText, setSearchText] =useState("");


  const handleSearchChange = (event) => {
    const newText = event.target.value;
    setSearchText(newText);
    onSearchChange(newText); 
  };


  return (
    <div className="Filter">
      <input type="text" name="search" placeholder="Search..." 
      value ={searchText} onChange={handleSearchChange}/>
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}


export default Filter;
