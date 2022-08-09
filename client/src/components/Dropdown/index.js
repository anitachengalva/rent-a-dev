import faker from "faker";
import _ from "lodash";
import React from "react";
import { Dropdown } from "semantic-ui-react";

const addressDefinitions = faker.definitions.address;
const stateOptions = _.map(addressDefinitions.state, (state, index) => ({
  key: addressDefinitions.state_abbr[index],
  text: state,
  value: addressDefinitions.state_abbr[index],
}));

const DropMenu = () => (
  <Dropdown
    placeholder="Skills"
    fluid
    multiple
    search
    selection
    options={skillOptions}
  />
);

export default DropMenu;
