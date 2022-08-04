import React from "react";
import {
    Input
} from 'semantic-ui-react'

const InputExampleFocus = () => <Input focus placeholder='Search...' />

function Homepage() {
    return (
        <div>
            <div class="ui focus input"><input type="text" placeholder="Search..." /></div>
        </div>
    );
}

export default Homepage;
