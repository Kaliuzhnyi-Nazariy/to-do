"use client";

import { Form, Formik } from "formik";
import { ISigninForm } from "../../typesInterfaces";
import Link from "next/link";
import Button from "../button";
import InputField from "../inputField";
import { signinValidationSchema } from "./validation";

export default function SigninForm() {
  const values: ISigninForm = {
    email: "",
    password: "",
  };

  return (
    <div className="w-full flex flex-col items-center">
      <Formik
        initialValues={values}
        validationSchema={signinValidationSchema}
        onSubmit={(val) => console.log(val)}
      >
        <Form className="flex flex-col justify-between px-10">
          {/* <div className="mt-[25px]">
            <HeaderField>Email: </HeaderField>

            <Field
              name="email"
              type="email"
              placeholder="Enter your email..."
              className="w-[240px] h-10 bg-white rounded-3xl px-5 placeholder:text-black placeholder:opacity-50 focus-visible:outline-2 focus-visible:outline-[var(--darkerpurple)] text-black"
            />
            <ErrorMessage name="email" component={ErrorComp} />
          </div> */}

          <InputField name="email" type="email" />
          <InputField name="password" type="password" />
          {/* <div className="mt-[15px]">
            <HeaderField>Password: </HeaderField>

            <Field
              name="password"
              type="password"
              placeholder="Enter your password..."
              className="w-[240px] h-10 bg-white rounded-3xl px-5 placeholder:text-black placeholder:opacity-50 focus-visible:outline-2 focus-visible:outline-[var(--darkerpurple)] text-black"
            />
            <ErrorMessage name="password" component={ErrorComp} />
          </div> */}
          <Button type="submit" signup={false}>
            Sign in
          </Button>
        </Form>
      </Formik>
      <p className="mt-[15px]">
        <Link href={"/auth/signup"}>
          {" "}
          Dont have an account?{" "}
          <span className="text-[var(--darkpurple)]">Sign up!</span>
        </Link>
      </p>
    </div>
  );
}
