"use client";

import { Form, Formik } from "formik";
import { ISigninForm } from "../../typesInterfaces";
import Link from "next/link";
import Button from "../button";
import InputField from "../inputField";
import { signinValidationSchema } from "./validation";
import { useAppDispatch } from "@/app/hooks/useAppDispatch";
import { signin } from "@/app/redux/auth/operations";
import { useRouter } from "next/navigation";

export default function SigninForm() {
  const values: ISigninForm = {
    email: "",
    password: "",
  };

  const router = useRouter();

  const dispatch = useAppDispatch();

  return (
    <div className="w-full flex flex-col items-center">
      <Formik
        initialValues={values}
        validationSchema={signinValidationSchema}
        onSubmit={async (val) => {
          const res = await dispatch(signin(val));
          if (res.payload?.token) {
            router.push("/todo");
          }
        }}
      >
        <Form className="flex flex-col justify-between px-10 md:w-[440px] md:p-0">
          <InputField name="email" type="email" />
          <InputField name="password" type="password" />
          <div className="flex w-full justify-center">
            <Button type="submit" signup={false}>
              Sign in
            </Button>
          </div>
        </Form>
      </Formik>
      <Link
        href={"/auth/signup"}
        className="md:mt-5 md:text-[32px] md:w-[400px] md:text-center 2xl:mt-0"
      >
        Dont have an account?
        <span className="text-[var(--darkpurple)]">Sign up!</span>
      </Link>
    </div>
  );
}
