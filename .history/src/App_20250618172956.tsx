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
  color?: string;
};

let myAnimal: Animal = {
  name: "Dog",
  age: 3,
  color: "Brown",
};

let Animals: Animal[];

//defining function in ts
function printAnything(Animal: string) {
  console.log(Animal);
}

printAnything("DOg");

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
