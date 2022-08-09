import React from "react";
import { Dropdown } from "semantic-ui-react";

const skillOptions = [
  {
    key: "HTML",
    text: "HTML",
    value: "HTML",
  },
  {
    key: "CSS",
    text: "CSS",
    value: "CSS",
  },
  {
    key: "Javascript",
    text: "Javascript",
    value: "Javascript",
  },
  {
    key: "Node",
    text: "Node",
    value: "Node",
  },
  {
    key: "React",
    text: "React",
    value: "React",
  },
  {
    key: "Express",
    text: "Express",
    value: "Express",
  },
  {
    key: "MongoDB",
    text: "MongoDB",
    value: "MongoDB",
  },
  {
    key: "SQL",
    text: "SQL",
    value: "SQL",
  },
  {
    key: "Git",
    text: "Git",
    value: "Git",
  },
];

const DropMenu = () => (
  <Dropdown
    placeholder="Please Select Relevant Skills"
    fluid
    multiple
    search
    selection
    options={skillOptions}
  />
);

export default DropMenu;
