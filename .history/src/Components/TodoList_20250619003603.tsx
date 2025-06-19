import React from "react";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todos, setTodos }: Props) => {
  return (
    <div>
      {todos.map((t) => (
        <li>{t.todo}</li>
      ))}
    </div>
  );
};

export default TodoList;
