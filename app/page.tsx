'use client'
import BackgroundBlurredOverlay from "@/components/BackgroundBlurredOverlay";
import Form from "@/components/Form";
import bgImage from "@/public/bg/bg-1.png";
import { useState } from "react";
import * as Yup from 'yup';

export default function Home() {

  const LoginSchema = Yup.object().shape({
    username: Yup.string()
      .required('Username is required!'),
    password: Yup.string()
      .required('Password is required'),
  });

  const handleLogin = (values: any) => {
    console.log(values)
  };

  return (
    <main>
      <BackgroundBlurredOverlay
        image={bgImage}
      >
      <Form
        validationSchema={LoginSchema}
        title="Login"
        inputs={[
          {
            id: 'username',
            name: 'username',
            placeholder: 'Username',
            type: 'text'
          },
          {
            id: 'password',
            name: 'password',
            placeholder: 'Password',
            type: 'password'
          },
        ]}
        button={{
          value: 'Login',
          handleSubmit: handleLogin
        }}
        underFormLink={{
          text: 'Create an account',
          url: '/register'
        }}
        formInitialValues={{
          username: '',
          password: ''
        }}

      />
      </BackgroundBlurredOverlay>
    </main>
  );
}
