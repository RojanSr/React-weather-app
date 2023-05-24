import React from "react";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import WeatherBox from "./components/WeatherBox";

function App() {
  const api = {
    key: "c8495d2d9d4dae61a4670de774427661",
    base: "http://api.openweathermap.org/data/2.5/",
  };

  const [query, setQuery] = React.useState("");
  const [weatherData, setWeatherData] = React.useState();

  function handleSearch(value) {
    setQuery(value);
  }

  function fetchData() {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((data) => setWeatherData(data));
  }

  function getWeatherClass() {
    if (weatherData) {
      switch (weatherData.weather[0].main) {
        case "Clouds":
          return "main cloudy";
        case "Clear":
          return "main clear";
        case "Rain":
          return "main rain";
      }
    }

    return "main";
  }

  const className = getWeatherClass();

  return (
    <div className={className}>
      <Navbar />
      <Search
        onUserSearch={handleSearch}
        controlInput={query}
        onUserEnter={fetchData}
      />
      {typeof weatherData != "undefined" && (
        <WeatherBox
          location={weatherData.name}
          country={weatherData.sys.country}
          temp={weatherData.main.temp}
          status={weatherData.weather[0].main}
        />
      )}
    </div>
  );
}

export default App;
