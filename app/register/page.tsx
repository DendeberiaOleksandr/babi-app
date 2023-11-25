"use client";
import React, { useState } from "react";
import bgImage from "@/public/bg/bg-2.png";
import BackgroundBlurredOverlay from "@/components/BackgroundBlurredOverlay";
import Form from "@/components/Form";
import * as Yup from "yup";

function RegistrationPage() {
  const RegisterSchema = Yup.object().shape({
    username: Yup.string().required("Username is required!"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string().required("Password confirmation is required"),
  });

  const handleRegister = (e: any) => {
    console.log(e);
  };

  return (
    <section>
      <BackgroundBlurredOverlay image={bgImage}>
        <Form
          validationSchema={RegisterSchema}
          title="Register"
          formInitialValues={{
            username: '',
            password: '',
            confirmPassword: ''
          }}
          inputs={[
            {
              id: "username",
              name: "username",
              placeholder: "Username",
              type: 'text'
            },
            {
              id: "password",
              name: "password",
              placeholder: "Password",
              type: "password",
            },
            {
              id: "confirmPassword",
              name: "confirmPassword",
              placeholder: "Confirm Password",
              type: "password",
            },
          ]}
          button={{
            value: "Register",
            handleSubmit: handleRegister,
          }}
          underFormLink={{
            text: "Already registered? Sign In!",
            url: "/",
          }}
        />
      </BackgroundBlurredOverlay>
    </section>
  );
}

export default RegistrationPage;
