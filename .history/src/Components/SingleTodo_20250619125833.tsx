import React from "react";
import { Todo } from "../model";
import { PencilLine, Trash2, CheckLine } from "lucide-react";
import TodoList from "./TodoList";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !TodoList.isDone } : todo
      )
    );
  };

  return (
    <form className="bg-gray-400 m-4 p-6 w-96 h-20 justify-center align-middle border-2 border-blue-500 rounded-md">
      <div className="ml-8 flex gap-16">
        <span>{todo.todo}</span>
        <div className="flex justify-between gap-7">
          <span>
            <PencilLine className="cursor-pointer" />
          </span>
          <span>
            <Trash2 className="cursor-pointer" />
          </span>
          <span onClick={() => handleDone(todo.id)}>
            <CheckLine className="cursor-pointer" />
          </span>
        </div>
      </div>
    </form>
  );
};

export default SingleTodo;
