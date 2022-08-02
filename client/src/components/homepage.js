import React from "react";
import logo from "./image/logo/white_logo_dark_background.jpg";

function Homepage() {
    return (
        <div>
            <h1>
                <img src={logo} className="App-logo" alt="logo" />
                Hey guys! I'm a header!</h1>
            <h2>h2</h2>
            <ul>
                <li>ii1</li>
                <li>li2</li>
                <li>li3</li>
            </ul>
        </div>
    );
}

export default Homepage;
