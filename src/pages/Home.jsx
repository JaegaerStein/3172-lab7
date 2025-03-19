import React from "react";
import Weather from "./Weather"; // Import the Weather component

const Home = () => {
  return (
    <div className="container mt-4">
      <h1>Welcome to My Portfolio</h1>
      <p>
        Hi, I'm Jaegar Steinhauer, an Applied Computer Science student at
        Dalhousie University.
      </p>
      {/* Include the Weather component here */}
      <Weather />
    </div>
  );
};

export default Home;