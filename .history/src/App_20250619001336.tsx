import React, { useState } from "react";
import "./App.css";
import InputFields from "./Components/InputFields";
import { Todo } from "./model";

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

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };
  console.log(todos);

  return (
    <div className="bg-green-300 ">
      <h1 className="font-extrabold text-green-800 text-2xl mt-4">
        Task Manager: Taskify
      </h1>
      <InputFields todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    </div>
  );
};

export default App;
