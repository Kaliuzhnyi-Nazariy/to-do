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
import { useSelector } from "react-redux";
import { authLoading } from "@/app/redux/auth/selectors";
import React, { useState } from "react";

export default function SigninForm() {
  const values: ISigninForm = {
    email: "",
    password: "",
  };

  const [showValue, setShowValue] = useState(false);

  const router = useRouter();

  const dispatch = useAppDispatch();

  const isLoading = useSelector(authLoading);

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
          <div className="relative">
            <InputField
              name="password"
              type="password"
              changeType={showValue}
              additionalStyles="relative "
            />
            <button
              type="button"
              className="absolute right-4 top-[60px] md:top-[82px] 2xl:top-[75px]"
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.stopPropagation();
                setShowValue(!showValue);
              }}
            >
              {showValue ? "🙉" : "🙈"}
            </button>
          </div>
          <div className="flex w-full justify-center">
            <Button
              type="submit"
              additionalStyles=" w-[240px] h-9 mt-10 md:h-[65px] md:w-[220px] md:mt-[30px] "
              isDisabled={isLoading}
            >
              {isLoading ? "Loading..." : "Sign in"}
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
