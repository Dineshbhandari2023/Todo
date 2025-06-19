import React from "react";
import "./App.css";

//Learning Types
let name: string;
let age: number;
let hobbies: string[];
let role: [number, number, string];

// Objects Can be defined using: types or interface
type Animal = {
  name: string;
  age: number;
  color: string;
};

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
