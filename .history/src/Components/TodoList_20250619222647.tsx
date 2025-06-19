import React from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";
import { Droppable } from "react-beautiful-dnd";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
}: Props) => {
  return (
    <div className="flex justify-between">
      <Droppable droppableId="TodosList">
        {(provided) => (
          <div
            className="w-2/4 bg-green-600 rounded-md m-1"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <h1 className="text-center text-2xl font-extrabold p-3">
              Active Task
            </h1>
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
        )}
      </Droppable>
      <div className="w-2/4 bg-red-600 rounded-md m-1">
        <h1 className="text-center text-2xl font-extrabold p-3">
          Completed Task
        </h1>
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
