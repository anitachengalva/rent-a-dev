import React from "react";
import { Menu } from "semantic-ui-react";
// import logo from "./image/logo_black_bg"

function Homepage() {
    return (
        <Menu>

            <Menu.Item style={{ fontSize: 26 }}>
                {/* <Image src={logo} /> */}
                Rent-A-Dev
            </Menu.Item>
            <Menu.Item position="right" >Profile</Menu.Item>
            <Menu.Item>Jobs</Menu.Item>
            <Menu.Item>Settings</Menu.Item>
        </Menu>
    );
}

// export default Homepage;
