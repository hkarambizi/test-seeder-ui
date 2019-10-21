import React from "react";
import ReactDOM from "react-dom";
import Input from "../src/components/input/input.component";
import Button from "../src/components/button/button.component";
import "./styles.css";

const handleClick = e => {
  console.log("clicked " + e.target);
};
const handleChange = e => {
  const val = e.target.value;
  console.log(val);
};
function App() {
  return (
    <div className="App">
      <h1> Gather Data Seeder</h1>
      <p>Enter seeder config details below:</p>
      <Input handleChange={handleChange} />
      <Button handleClick={handleClick} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
