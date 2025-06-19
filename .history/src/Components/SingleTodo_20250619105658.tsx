import React from "react";
import { Todo } from "../model";
import { PencilLine, Trash2 } from "lucide-react";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  return (
    <form className="">
      <div className="ml-8 flex gap-6">
        <span>{todo.todo}</span>
        <div className="flex gap-4">
          <span>
            <PencilLine />
          </span>
          <span>
            <Trash2 />
          </span>
          <span>
            <CheckLine />
          </span>
        </div>
      </div>
    </form>
  );
};

export default SingleTodo;
