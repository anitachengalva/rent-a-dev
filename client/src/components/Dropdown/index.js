import React, { useState } from "react";
import { Multiselect } from "multiselect-react-dropdown";
import ReactDOM from "react-dom";

import "../../App.css";
// when moving to actual app.js, mind filepath for css

function Drop() {
  const data = [
    { Skill: "HTML", id: 1 },
    { Skill: "CSS", id: 2 },
    { Skill: "Javascript", id: 3 },
    { Skill: "Node", id: 4 },
    { Skill: "React", id: 5 },
    { Skill: "Express", id: 6 },
    { Skill: "MongoDB", id: 7 },
    { Skill: "SQL", id: 8 },
    { Skill: "Git", id: 9 },
  ];
  const [options] = useState(data);
  return (
    // css - please integrate into app.css
    <div style={{ width: "90%", justifyContent: "center", display: "flex" }}>
      <select>
        <option selected value="Default">
          Select Skills
        </option>
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
        <option value="Javascript">Javascript</option>
        <option value="Python">Python</option>
        <option value="Java">Java</option>
        <option value="PHP">PHP</option>
        <option value="C#">C#</option>
        <option value="Node">Node</option>
        <option value="Yarn">Yarn</option>
        <option value="React">React</option>
        <option value="Servers">Servers</option>
        <option value="APIs">APIs</option>
        <option value="Git">Git</option>
        <option value="SQL">SQL</option>
        <option value="MongoDB">MongoDB</option>
      </select>
    </div>
    // closing div seals css
  );
}

export default Drop;
