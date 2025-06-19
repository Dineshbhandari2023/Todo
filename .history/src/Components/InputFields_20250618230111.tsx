import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: () => void;
}

const InputFields = ({ todo, setTodo, handleAdd }: Props) => {
  return (
    <form className="flex gap-4 m-6" onSubmit={handleAdd}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a Todo"
        className="flex-1 px-4 py-2 border-2 border-black rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        className="px-6 py-2 bg-white border-2 border-black rounded-lg text-lg font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default InputFields;
