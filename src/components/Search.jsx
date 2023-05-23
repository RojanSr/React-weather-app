import React from "react";

export default function Search({ onUserSearch, controlInput }) {
  // function handleChange(e) {
  //   onUserSearch(e)
  // }

  const handleChange = (event) => {
    onUserSearch(event.target.value);
  };

  return (
    <div className="search--box">
      <input
        type="text"
        placeholder="Search for places..."
        className="search--input"
        onChange={handleChange}
        value={controlInput}
      />
    </div>
  );
}
