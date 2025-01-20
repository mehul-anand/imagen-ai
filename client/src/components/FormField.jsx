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
          className="block text-sm font-medium text-gray-900"
        >
          {label}
        </label>
        {isRandom && (
          <button
            type="button"
            onClick={handleRandom}
            className="font-semibold text-xs bg-[#ececf1] py-1 px-2 rounded-[5px] text-black"
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
        className="mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4646ff] focus:border-[#4649ff] outline-none block w-full p-3"
      />
    </div>
  );
}

export default FormField;
