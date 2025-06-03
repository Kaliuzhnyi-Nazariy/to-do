"use client";

import { Form, Formik } from "formik";
import InputField from "../inputField";
import Button from "../button";
import { updUserValidation } from "./validation";
import { IUserUPD } from "@/app/redux/user/typesOrInterfaces";
import { updateUser } from "@/app/redux/user/operations";
import { useAppDispatch } from "@/app/hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { userLoading } from "@/app/redux/user/selectors";
import { useState } from "react";
import { toast } from "react-toastify";

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

  const isLoading = useSelector(userLoading);

  const [showValue, setShowValue] = useState(false);

  return (
    <div className="flex h-full flex-col justify-center items-center">
      <h2 className="text-[24px] md:text-[48px]">Update user</h2>
      <Formik
        initialValues={initialValue}
        validationSchema={updUserValidation}
        onSubmit={async (val) => {
          const res = await dispatch(updateUser(val));
          if (res.payload._id) {
            toast.success("User data updated", { theme: "colored" });
          } else {
            toast.error(res.payload, { theme: "colored" });
          }
          onClose();
        }}
      >
        <Form className="md:w-[440px] md:flex md:flex-col overflow-y-auto">
          <InputField name="name" type="text" />
          <InputField name="email" type="email" />
          <div className=" relative ">
            <InputField
              name="password"
              type="password"
              changeType={showValue}
              additionalStyles=" relative "
            />
            <button
              type="button"
              className="absolute right-4 top-[45px] md:top-[82px] 2xl:top-[75px]"
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.stopPropagation();
                setShowValue(!showValue);
              }}
            >
              {showValue ? "🙉" : "🙈"}
            </button>
          </div>
          <div className="w-full flex justify-center">
            <Button
              additionalStyles=" w-full mt-10 md:h-[65px] self-center"
              isDisabled={isLoading}
            >
              {isLoading ? "Loading..." : "Update"}
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
