import React from "react";

export default function WeatherBox() {
  const currentDate = new Date();
  const date = currentDate.getDate();
  const dayIndex = currentDate.getDay();
  const monthIndex = currentDate.getMonth();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="container-flex">
      <div className="location-box">
        <div className="location">New york, USA</div>
        <div className="date">
          {`${days[dayIndex]}, ${months[monthIndex]} ${date}`}
        </div>
      </div>

      <div className="temp-box">5ºC</div>

      <div className="weather-box">Cloudy</div>
    </div>
  );
}
