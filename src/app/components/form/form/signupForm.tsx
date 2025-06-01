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
import { useState } from "react";
import { useSelector } from "react-redux";
import { authLoading } from "@/app/redux/auth/selectors";

export default function SignUpForm() {
  const value: ISignupForm = {
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  };

  const dispatch = useAppDispatch();
  const router = useRouter();

  const [showPasswordValue, setShowPasswordValue] = useState(false);
  const [showConfirmPasswordValue, setShowConfirmPasswordValue] =
    useState(false);

  const isLoading = useSelector(authLoading);

  return (
    <div className="flex flex-col items-center px-10  overflow-x-hidden md:px-[140px] 2xl:px-[246px] 2xl:col-start-2 2xl:h-[600px]">
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
        <Form className="md:w-[440px] 2xl:w-[460px] 2xl:h-[545px] overflow-hidden">
          <div className="h-[400px] md:min-h-[520px] 2xl:min-h-[460px] overflow-x-hidden overflow-y-auto">
            <InputField name="name" type="text" />
            <InputField name="email" type="email" />
            <div className="relative">
              <InputField
                name="password"
                type="password"
                changeType={showPasswordValue}
                additionalStyles="relative "
              />
              <button
                type="button"
                className="absolute right-2 md:right-4 2xl:right-9 top-[45px] md:top-[68px] 2xl:top-[60px]"
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.stopPropagation();
                  setShowPasswordValue(!showPasswordValue);
                }}
              >
                {showPasswordValue ? "🙉" : "🙈"}
              </button>
            </div>
            <div className="relative">
              <InputField
                name="confirmPassword"
                type="password"
                additionalStyles="relative "
                changeType={showConfirmPasswordValue}
              />
              <button
                type="button"
                className="absolute right-2 md:right-4 2xl:right-9 top-[45px] md:top-[68px] 2xl:top-[60px]"
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.stopPropagation();
                  setShowConfirmPasswordValue(!showConfirmPasswordValue);
                }}
              >
                {showConfirmPasswordValue ? "🙉" : "🙈"}
              </button>
            </div>
          </div>
          <div className="w-[240px] md:w-full flex justify-center">
            <Button additionalStyles="w-full h-9 md:w-[220px] md:h-[84px] md:mt-5 ">
              {isLoading ? "Loading..." : "Sign up"}
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
