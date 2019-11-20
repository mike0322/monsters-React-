import React from "react";
import "./search-style.css";

export const Search = ({ handleChange, placeHolder }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeHolder}
      onChange={handleChange}
    />
  );
};
