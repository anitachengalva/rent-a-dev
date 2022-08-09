import React, { useState } from "react";
import { Multiselect } from "multiselect-react-dropdown";
import ReactDOM from "react-dom";

import "../../App.css";
// when moving to actual app.js, mind filepath for css

function DropMenu() {
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
      <div className="DropMenu">
        <h3 style={{color:"green"}}>Please Select Skills</h3>
        <Multiselect options={options} displayValue={Skill} />
      </div>
    </div>
    // closing div seals css, can remove once css is integrated
  );
}

export default DropMenu;
