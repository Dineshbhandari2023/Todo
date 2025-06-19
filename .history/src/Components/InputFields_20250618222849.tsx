import React from "react";

const InputFields = () => {
  return (
    <div className="flex gap-4 mb-6">
      <input
        type="text"
        placeholder="Enter a Todo"
        className="flex-1 px-4 py-2 border-2 border-black rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="px-6 py-2 bg-white border-2 border-black rounded-lg text-lg font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Add
      </button>
    </div>
  );
};

export default InputFields;
