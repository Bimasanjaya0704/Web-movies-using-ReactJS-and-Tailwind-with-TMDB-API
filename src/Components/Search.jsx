import React from "react";

const Search = () => {
  return (
      <label for="search">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search movie.."
          className="bg-light w-full text-center lg:text-left font-normal text-base my-6 px-2 py-1 rounded-md shadow-md text-second focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
        />
      </label>
  );
};

export default Search;
