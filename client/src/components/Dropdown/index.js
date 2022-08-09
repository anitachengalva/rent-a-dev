import React from "react";
import { Dropdown } from "semantic-ui-react";

// const addressDefinitions = faker.definitions.address;
// const skillOptions = _.map(addressDefinitions.skills, (skills, index) => ({
//   key: addressDefinitions.state_abbr[index],
//   text: skills,
//   value: addressDefinitions.state_abbr[index],
// }));

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
