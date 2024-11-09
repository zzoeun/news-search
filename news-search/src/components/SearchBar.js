import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    if (inputValue.trim() !== "") {
      onSearch(inputValue);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>검색</button>
    </div>
  );
};

export default SearchBar;
