import React from "react";

export default function Search({ onUserSearch, controlInput, onUserEnter }) {
  // function handleChange(e) {
  //   onUserSearch(e)
  // }

  const handleChange = (event) => {
    onUserSearch(event.target.value.replace(/ /g, "+"));
  };

  // document
  //   .getElementById("fetching-plane")
  //   .addEventListener("click", () => controlInput && onUserEnter());

  return (
    <div className="search--box">
      <input
        type="text"
        placeholder="Search for places..."
        className="search--input"
        onChange={handleChange}
        value={controlInput.replace(/\+/g, " ")}
        onKeyDown={(e) => e.key == "Enter" && controlInput && onUserEnter()}
      />

      <div
        className="fetch-plane"
        id="fetching-plane"
        onClick={() => controlInput && onUserEnter()}
      >
        <i className="fa-regular fa-paper-plane"></i>
      </div>
    </div>
  );
}
