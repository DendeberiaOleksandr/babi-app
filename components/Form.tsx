"use client";
import React from "react";
import InputField from "./InputField";
import Button from "./Button";
import Link from "next/link";
import { Formik, FormikHelpers } from "formik";

type FormInput = {
  placeholder: string;
  value: string;
  name: string;
  setValue: (value: string) => void;
  type?: "text" | "password";
};

type FormButton = {
  value: string;
  handleSubmit: any;
};

type FieldInitialValue = {
  field: string;
  value: string;
};

type FormProps = {
  title: string;
  inputs: FormInput[];
  button: FormButton;
  underFormLink?: {
    text: string;
    url: string;
  };
  formInitialValues: FieldInitialValue[];
  validationSchema: any;
};

function Form({
  title,
  inputs,
  button,
  underFormLink,
  formInitialValues,
  validationSchema,
}: FormProps) {
  return (
    <div className="min-w-[364px] min-h-[732px] sm:min-w-[564px] flex flex-col px-8 py-36 justify-evenly items-center gap-12 sm:gap-4">
      <h1 className="text-6xl font-bold text-primary drop-shadow">Babi</h1>

      <Formik
        initialValues={formInitialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form
            onSubmit={button.handleSubmit}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
            }}
            className="flex flex-1 w-full flex-col justify-between items-center px-4 py-12 rounded-md shadow-md shadow-white gap-4"
          >
            <label className="text-xl sm:text-2xl text-pink2 opacity-90 font-semibold drop-shadow-[0_35px_35px_rgba(255, 120, 196, 1)]">
              {title}
            </label>

            {inputs.map((inp) => (
              <InputField
                key={inp.name}
                name={inp.name}
                value={values.find(val => val.field === inp.name)?.field!}
                setValue={inp.setValue}
                type={inp.type ?? "text"}
                placeholder={inp.placeholder}
              />
            ))}

            <Button title={button.value} />
          </form>
        )}
      </Formik>

      {underFormLink && (
        <Link
          className="text-pink2 text-lg drop-shadow"
          href={underFormLink.url}
        >
          {underFormLink.text}
        </Link>
      )}
    </div>
  );
}

export default Form;
