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

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

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
            name: 'username',
            placeholder: 'Username',
            value: username,
            setValue: setUsername
          },
          {
            name: 'password',
            placeholder: 'Password',
            value: password,
            setValue: setPassword,
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
        formInitialValues={[
          {
            field: 'username',
            value: ''
          },
          {
            field: 'password',
            value: ''
          },
        ]}

      />
      </BackgroundBlurredOverlay>
    </main>
  );
}
