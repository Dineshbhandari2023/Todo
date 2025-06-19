import React from "react";
import "./App.css";
import InputFields from "./Components/InputFields";

// //Learning Types
// let name: string;
// let age: number;
// let hobbies: string[];
// let role: [number, number, string];

// // Objects Can be defined using: types or interface
// type Animal = {
//   name: string;
//   age: number;
//   color?: string;
// };

// let myAnimal: Animal = {
//   name: "Dog",
//   age: 3,
//   color: "Brown",
// };

// let Animals: Animal[];

// //defining function in ts
// function printAnything(Animal: string) {
//   console.log(Animal);
// }

// printAnything("DOG");

function App() {
  return (
    <div className="App">
      <h1>Task Manager: Taskify</h1>
      <InputFields />
    </div>
  );
}

export default App;
