"use client";

import { ISignupForm } from "../../typesInterfaces";

import { Formik, Form } from "formik";
import InputField from "../inputField";
import Button from "../button";
import Link from "next/link";
import { signupValidationSchema } from "./validation";

export default function SignUpForm() {
  const value: ISignupForm = {
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  };

  return (
    <div className="bg-[var(--authbgc)]  flex flex-col justify-between items-center px-10">
      <Formik
        validationSchema={signupValidationSchema}
        initialValues={value}
        onSubmit={(val) => {
          console.log(val);
        }}
      >
        <Form>
          <InputField name="name" type="text" />
          <InputField name="email" type="email" />
          <InputField name="password" type="password" />
          <InputField name="confirmPassword" type="password" />
          <Button signup={true}>Sign up</Button>
        </Form>
      </Formik>
      <Link href={"/auth/signin"}>
        Have an account?{" "}
        <span className="text-[var(--darkpurple)]">Sign in!</span>
      </Link>
    </div>
  );
}
