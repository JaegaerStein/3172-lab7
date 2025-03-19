import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const app = express();

// Allow frontend access from Netlify
app.use(cors({ origin: "https://your-netlify-site.netlify.app" }));

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

    console.log("Response status:", response.status);
    const data = await response.json();
    console.log("Weather data:", data);

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch weather data");
    }

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

// Use Render's dynamic port if available
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

});

app.listen(5000, () => console.log("Server running on port 5000"));

