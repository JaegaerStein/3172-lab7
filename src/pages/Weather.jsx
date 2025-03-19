import React, { useState, useEffect } from "react";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/weather")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }
        return response.json();
      })
      .then((data) => setWeather(data))
      .catch((error) => {
        console.error("Error fetching weather:", error);
        setError(error.message);
      });
  }, []);

  return (
    <div className="weather-container mt-4">
      <h2>Weather</h2>
      {error ? (
        <p className="text-danger">Error: {error}</p>
      ) : weather ? (
        <div>
          <p>
            <strong>{weather.city}</strong>: {weather.temp}°C, {weather.humidity}% humidity
          </p>
        </div>
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  );
};

export default Weather;