import React from "react";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import WeatherBox from "./components/WeatherBox";

function App() {
  const [query, setQuery] = React.useState("");

  function handleSearch(value) {
    setQuery(value);
  }

  return (
    <div className="main cloudy">
      <Navbar />
      <Search onUserSearch={handleSearch} controlInput={query} />
      <WeatherBox />
    </div>
  );
}

export default App;
