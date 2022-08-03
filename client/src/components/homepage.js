import React from "react";
// import logo1 from "./image/logo_black_bg";

var style = {
    div: {
        "height": "500px",
        "backgroundColor": "black",
    }
}

function Homepage() {
    return (
        <div>
            <h1>
                {/* <img src={logo1} className="App-logo" alt="logo" /> */}
                Hey guys! I'm a header!</h1>
            <h2>h2</h2>
            <ul>
                <li>ii1</li>
                <li>li2</li>
                <li>li3</li>
            </ul>
            <div style={style.div} >

            </div>
        </div>
    );
}

export default Homepage;
