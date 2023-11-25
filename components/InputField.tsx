import { FormikErrors } from "formik";
import React, { useEffect } from "react";

type InputFieldProps = {
  id: any;
  value: any;
  handleChange: any;
  placeholder: string;
  type: "text" | "password";
  name: string;
  error?: any;
};

function InputField({
  id,
  value,
  handleChange,
  placeholder,
  type = "text",
  name,
  error,
}: InputFieldProps) {
  return (
    <div className="flex flex-col">
      <input
        id={id}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.6)",
        }}
        value={value}
        onChange={handleChange}
        type={type}
        name={name}
        placeholder={placeholder}
        className={`text-gray-600 drop-shadow-sm drop-shadow-pink1 placeholder:text-gray-500 px-4 sm:px-6 py-2 sm:py-3 sm:text-lg rounded-md ${
          error && "border-2 border-red-500"
        }`}
      />
    </div>
  );
}

export default InputField;
