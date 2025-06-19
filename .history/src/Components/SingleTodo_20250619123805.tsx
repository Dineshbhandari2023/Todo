import React from "react";
import { Todo } from "../model";
import { PencilLine, Trash2, CheckLine } from "lucide-react";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  return (
    <form className="bg-gray-400 m-4 p-6 w-96 h-20 justify-center align-middle">
      <div className="ml-8 flex gap-10">
        <span>{todo.todo}</span>
        <div className="flex justify-between gap-8">
          <span>
            <PencilLine className="cursor-pointer" />
          </span>
          <span>
            <Trash2 className="cursor-pointer" />
          </span>
          <span>
            <CheckLine className="cursor-pointer" />
          </span>
        </div>
      </div>
    </form>
  );
};

export default SingleTodo;
