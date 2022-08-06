import React from "react";
import { Menu } from "semantic-ui-react";

function Header() {
    return (
        <div>
            <Menu>

                <Menu.Item style={{ fontSize: 26 }}>
                    {/* <Image src={logo} /> */}
                    Rent-A-Dev
                </Menu.Item>
                <Menu.Item position="right" >Log In</Menu.Item>
                <Menu.Item>Sign Up</Menu.Item>
                <Menu.Item>Profile</Menu.Item>
            </Menu>
        </div>

    );
}

export default Header;