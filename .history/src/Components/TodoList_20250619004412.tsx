import React from "react";
import { Todo } from "../model";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todos, setTodos }: Props) => {
  return (
    <div>
      {todos.map((todo) => (
        <div className="grid grid-cols-3 gap-4">
          {/* Added task */}
          <div className="bg-white border-2 border-black rounded-lg p-4 h-96">
            <h2 className="text-lg font-semibold mb-4 text-center">Task</h2>
            <div className="h-full bg-gray-50 rounded border border-gray-300">
              {todo.id}
              {todo.todo}
            </div>
          </div>

          {/* Task In progress */}
          <div className="bg-white border-2 border-black rounded-lg p-4 h-96">
            <h2 className="text-lg font-semibold mb-4 text-center">progress</h2>
            <div className="h-full bg-gray-50 rounded border border-gray-300"></div>
          </div>

          {/* Completed task */}
          <div className="bg-white border-2 border-black rounded-lg p-4 h-96">
            <h2 className="text-lg font-semibold mb-4 text-center">
              completed
            </h2>
            <div className="h-full bg-gray-50 rounded border border-gray-300"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
