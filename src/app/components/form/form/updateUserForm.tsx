"use client";

import { Form, Formik } from "formik";
import InputField from "../inputField";
import Button from "../button";
import { updUserValidation } from "./validation";
import { IUserUPD } from "@/app/redux/user/typesORInterfaces";
import { updateUser } from "@/app/redux/user/operations";
import { useAppDispatch } from "@/app/hooks/useAppDispatch";

export const UpdateUserData = ({
  username,
  userEmail,
  onClose,
}: {
  username: string;
  userEmail: string;
  onClose: () => void;
}) => {
  const initialValue: IUserUPD = {
    name: username || "",
    email: userEmail || "",
    password: "",
  };

  const dispatch = useAppDispatch();

  return (
    <div className="flex h-full flex-col justify-center items-center">
      <h2 className="text-[24px] md:text-[48px]">Update user</h2>
      <Formik
        initialValues={initialValue}
        validationSchema={updUserValidation}
        onSubmit={async (val) => {
          await dispatch(updateUser(val));
          onClose();
        }}
      >
        <Form className="md:w-[440px] md:flex md:flex-col">
          <InputField name="name" type="text" />
          <InputField name="email" type="email" />
          <InputField name="password" type="password" />
          <Button signup={false} additionalStyles=" h-[65px] self-center">
            Update
          </Button>
        </Form>
      </Formik>
    </div>
  );
};
