import React from "react";

function FormField({
  label,
  type,
  name,
  placeholder,
  value ,
  handleChange,
  isRandom,
  handleRandom,
}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-[#d8dfe6]"
        >
          {label}
        </label>
        {isRandom && (
          <button
            type="button"
            onClick={handleRandom}
            className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-[5px] py-1 px-2 text-xs font-semibold"
          >
            Use a random Prompt!
          </button>
        )}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="mb-5 bg-black border border-gray-300 text-[#d8dfe6] text-sm rounded-lg outline-none block w-full p-3"
      />
    </div>
  );
}

export default FormField;
