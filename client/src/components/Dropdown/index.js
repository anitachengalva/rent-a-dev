import React from "react";
import ReactDOM from "react-dom";

function App() {
    return (
        <select>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="Javascript">Javascript</option>
            <option value="Python">Python</option>
            <option value="Java">Java</option>
            <option value="PHP">PHP</option>
            <option value="C#">C#</option>
            <option value="Node">Node</option>
            <option value="Yarn">Yarn</option>
            <option value="React">React</option>
            <option value="Servers">Servers</option>
            <option value="APIs">APIs</option>
            <option value="Git">Git</option>
            <option value="SQL">SQL</option>
            <option value="MongoDB">MongoDB</option>
        </select>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));