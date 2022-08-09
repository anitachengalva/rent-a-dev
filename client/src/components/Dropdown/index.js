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
