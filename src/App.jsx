import React from "react";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import WeatherBox from "./components/WeatherBox";

function App() {
  const api = {
    key: import.meta.env.VITE_API_KEY,
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const [query, setQuery] = React.useState("");
  const [weatherData, setWeatherData] = React.useState();

  function handleSearch(value) {
    setQuery(value);
  }

  function fetchData() {
    const place = query.replace(/ /g, "+");
    fetch(`${api.base}weather?q=${place}&units=metric&APPID=${api.key}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then((data) => setWeatherData(data))
      .catch((err) =>
        alert(
          "It seems like there is typo in the query. Please check and try again. " +
            err
        )
      );
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
