import React from "react";

type InputFieldProps = {
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  type: "text" | "password";
  name: string;
  error?: any;
};

function InputField({
  value,
  setValue,
  placeholder,
  type = "text",
  name,
  error
}: InputFieldProps) {
  return (
    <input
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.6)",
      }}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      type={type}
      name={name}
      placeholder={placeholder}
      className="text-gray-600 drop-shadow-sm drop-shadow-pink1 placeholder:text-gray-500 px-4 sm:px-6 py-2 sm:py-3 sm:text-lg rounded-md"
    />
  );
}

export default InputField;
