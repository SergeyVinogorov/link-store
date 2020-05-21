import React from "react";
import PropTypes from "prop-types";
//styles
import "./styles/Search.scss";

export default function Search({
  search,
  searchChange,
  searchTitle,
  searchPlaceholder,
}) {
  return (
    <div className="search-wrapper">
      <label for="search" className="search-title">
        {searchTitle}
      </label>
      <input
        type="text"
        name="search"
        id="search"
        value={search}
        onChange={searchChange}
        placeholder={searchPlaceholder}
        className="search"
      />
    </div>
  );
}
Search.propTypes = {
  search: PropTypes.string.isRequired,
  searchChange: PropTypes.func.isRequired,
  searchTitle: PropTypes.string.isRequired,
  searchPlaceholder: PropTypes.string,
};

Search.defaultProps = {
  search: "",
  searchChange: () => {
    console.log("something wrong");
  },
  searchTitle: "Search Link",
  searchPlaceholder: " Start type...",
};
