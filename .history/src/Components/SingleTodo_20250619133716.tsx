import React, { useState } from "react";
import { Todo } from "../model";
import { PencilLine, Trash2, CheckLine } from "lucide-react";
import TodoList from "./TodoList";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <form className="bg-gray-400 m-4 p-6 max-w-2xl h-20 justify-center align-middle border-2 border-blue-500 rounded-md">
      <div className="ml-8 flex justify-between">
        {edit ? (
          <input
            value={editTodo}
            onChange={() => {
              setEditTodo(e.target.value);
            }}
          />
        ) : todo.isDone ? (
          <s>{todo.todo}</s>
        ) : (
          <span>{todo.todo}</span>
        )}

        <div className="flex justify-between gap-7">
          <span
            onClick={() => {
              if (!edit && !todo.isDone) {
                setEdit(!edit);
              }
            }}
          >
            <PencilLine className="cursor-pointer" />
          </span>
          <span onClick={() => handleDelete(todo.id)}>
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
