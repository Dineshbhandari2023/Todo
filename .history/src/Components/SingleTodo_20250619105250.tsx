import React from "react";
import { Todo } from "../model";
import { PencilLine } from "lucide-react";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  return (
    <form className="flex">
      <div className="ml-6">
        <span>{todo.todo}</span>
        <div>
          <span>
            <PencilLine />
          </span>
        </div>
      </div>
    </form>
  );
};

export default SingleTodo;
