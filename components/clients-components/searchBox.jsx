"use client";

import { useState } from "react";

const SearchBox = () => {
  const [searchQuery, setSearchQuery] = useState("");
  console.log(searchQuery);

  return (
    <div className="search">
      <input
        value={searchQuery}
        type="text"
        name="search"
        id="search"
        placeholder="Search"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
