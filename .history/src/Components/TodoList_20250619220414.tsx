import React from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todos, setTodos }: Props) => {
  return (
    <div className="flex justify-between">
      <div className="w-2/4 bg-green-600 rounded-md ml-1">
        <h1 className="text-center text-2xl font-extrabold">Active Task</h1>
        <div>
          {todos.map((todo) => (
            <SingleTodo
              todo={todo}
              key={todo.id}
              todos={todos}
              setTodos={setTodos}
            />
          ))}
        </div>
      </div>
      <div className="w-2/4 bg-red-600 rounded-md mr-1">
        <h1 className="text-center text-2xl font-extrabold">Completed Task</h1>
        <div>
          {todos.map((todo) => (
            <SingleTodo
              todo={todo}
              key={todo.id}
              todos={todos}
              setTodos={setTodos}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
