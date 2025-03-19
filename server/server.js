import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const app = express();
app.use(cors());

const projects = [
  { name: "Portfolio Site", description: "My personal portfolio." },
  { name: "Item Shop", description: "A simple online store." },
];

app.get("/api/projects", (req, res) => {
  res.json(projects);
});

app.get("/api/weather", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Halifax,CA&units=metric&appid=${process.env.WEATHER_API_KEY}`
    );

    // Log the response status and data for debugging
    console.log("Response status:", response.status);
    const data = await response.json();
    console.log("Weather data:", data);

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch weather data");
    }

    // Extract city, temperature, and humidity
    res.json({
      city: data.name,
      temp: data.main.temp,
      humidity: data.main.humidity,
    });
  } catch (error) {
    console.error("Error fetching weather:", error.message);
    res.status(500).json({ error: "Failed to fetch weather" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));

