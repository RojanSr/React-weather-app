import React from "react";

export default function Search({ onUserSearch, controlInput, onEnter }) {
  // function handleChange(e) {
  //   onUserSearch(e)
  // }

  const handleChange = (event) => {
    onUserSearch(event.target.value);
  };

  const handlePress = (event) => {
    onEnter(event);
  };

  return (
    <div className="search--box">
      <input
        type="text"
        placeholder="Search for places..."
        className="search--input"
        onChange={handleChange}
        value={controlInput}
        onKeyDown={handlePress}
      />
    </div>
  );
}
