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

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleRegister = (e: any) => {
    console.log(e);
  };

  return (
    <section>
      <BackgroundBlurredOverlay image={bgImage}>
        <Form
          validationSchema={RegisterSchema}
          title="Register"
          formInitialValues={[
            {
                field: 'username',
                value: ''
            },
            {
                field: 'password',
                value: ''
            },
            {
                field: 'confirmPassword',
                value: ''
            },
          ]}
          inputs={[
            {
              name: "username",
              placeholder: "Username",
              value: username,
              setValue: setUsername,
            },
            {
              name: "password",
              placeholder: "Password",
              value: password,
              setValue: setPassword,
              type: "password",
            },
            {
              name: "confirmPassword",
              placeholder: "Confirm Password",
              value: confirmPassword,
              setValue: setConfirmPassword,
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
