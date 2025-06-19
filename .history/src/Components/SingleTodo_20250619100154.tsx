import React from "react";
import { Todo } from "../model";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  return (
    <form className="flex">
      <div className="">
        <span>{todo.todo}</span>
      </div>
    </form>
  );
};

export default SingleTodo;
