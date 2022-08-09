import React from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

import image from "../../image/logo_black_bg.png"

function Header() {
    return (
        <div>
            <Menu>

                <Menu.Item style={{ fontSize: 26 }}>

                    <NavLink to="/"><img src={image}></img></NavLink>
                </Menu.Item>
                <Menu.Item position="right" >
                    <NavLink to="/login">Log In</NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink to="/signup">Sign Up</NavLink >
                </Menu.Item>
                <Menu.Item>Profile</Menu.Item>
            </Menu>
        </div>

    );
}

export default Header;