import React from "react";

const TextInput = ({ label, type }) => {
  return (
    <div className="mb-4">
      <label className="block text-grey-darker text-sm font-bold mb-2">
        {label}
      </label>
      <input
        type={type}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-indigo-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none block w-full p-2.5"
        required
      />
    </div>
  );
};

export default TextInput;
