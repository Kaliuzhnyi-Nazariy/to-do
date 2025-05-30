"use client";

import { ISignupForm } from "../../typesInterfaces";

import { Formik, Form } from "formik";
import InputField from "../inputField";
import Button from "../button";
import Link from "next/link";
import { signupValidationSchema } from "./validation";
import { useAppDispatch } from "@/app/hooks/useAppDispatch";
import { signup } from "@/app/redux/auth/operations";
import { useRouter } from "next/navigation";

export default function SignUpForm() {
  const value: ISignupForm = {
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  };

  const dispatch = useAppDispatch();
  const router = useRouter();

  return (
    <div className="flex flex-col items-center px-10  overflow-x-hidden md:px-[140px] 2xl:px-[246px] 2xl:col-start-2 2xl:h-[565px]">
      <Formik
        validationSchema={signupValidationSchema}
        initialValues={value}
        onSubmit={async (val) => {
          const res = await dispatch(signup(val));
          if (res.payload?.token) {
            router.push("/todo");
          }
        }}
      >
        <Form className="md:w-[440px] 2xl:w-[460px] 2xl:h-[920px]  overflow-hidden">
          <div className="h-[400px] md:h-[700px] overflow-y-scroll">
            <InputField name="name" type="text" />
            <InputField name="email" type="email" />
            <InputField name="password" type="password" />
            <InputField name="confirmPassword" type="password" />
          </div>
          <div className="w-[240px] md:w-full flex justify-center">
            <Button signup={true} additionalStyles=" md:h-[84px]">
              Sign up
            </Button>
          </div>
        </Form>
      </Formik>
      <Link
        href={"/auth/signin"}
        className="md:mt-5 md:text-[32px] md:w-[350px] md:text-center 2xl:mt-0"
      >
        Have an account?
        <span className="text-[var(--darkpurple)]">Sign in!</span>
      </Link>
    </div>
  );
}
