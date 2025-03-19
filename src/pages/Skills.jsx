import React, { useState } from "react";

const skillsList = [
  { name: "JavaScript", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "CSS", category: "Frontend" },
];

const Skills = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const filteredSkills = skillsList.filter(
    (skill) =>
      skill.name.toLowerCase().includes(search.toLowerCase()) &&
      (category ? skill.category === category : true)
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search skills..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => setCategory("Frontend")}>Frontend</button>
      <button onClick={() => setCategory("Backend")}>Backend</button>
      <button onClick={() => setCategory("")}>All</button>

      <ul>
        {filteredSkills.map((skill, index) => (
          <li key={index}>{skill.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
