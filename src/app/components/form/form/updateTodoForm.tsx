"use client";

import { updateTodo } from "@/app/redux/todo/typesOrInterfaces";
import { Formik, Form } from "formik";
import { createToDoValidation } from "./validation";
import InputField from "../inputField";
import Button from "../button";
import { useAppDispatch } from "@/app/hooks/useAppDispatch";
import { updateToDo } from "@/app/redux/todo/operations";
import { useSelector } from "react-redux";
import { todoLoading } from "@/app/redux/todo/selectors";
import { toast } from "react-toastify";

export const UpdateToDoForm = ({
  data,
  onClose,
  isDisabled,
}: {
  data: updateTodo;
  onClose: () => void;
  isDisabled?: boolean;
}) => {
  const initialValue: updateTodo = {
    _id: data._id,
    title: data.title || "",
    description: data.description || "",
    date: new Date(data.date).toISOString().split("T")[0] || "",
  };

  const dispatch = useAppDispatch();

  const isLoading = useSelector(todoLoading);

  return (
    <div className="flex h-full flex-col justify-center items-center">
      <h2 className="text-[24px] md:text-[48px]">Update to-do</h2>
      <Formik
        initialValues={initialValue}
        validationSchema={createToDoValidation}
        onSubmit={async (val) => {
          const res = await dispatch(updateToDo({ ...val, endTime: val.date }));
          if (res.payload._id) {
            toast.success("To-do is updated!", { theme: "colored" });
          } else {
            toast.error(res.payload, { theme: "colored" });
          }
          onClose();
        }}
      >
        <Form className="md:w-[440px] md:flex md:flex-col">
          <InputField
            name="title"
            type="text"
            isDisabled={isDisabled}
            additionalStyles="md:h-[50px]"
          />
          <InputField
            name="description"
            type="text"
            isDisabled={isDisabled}
            additionalStyles="md:h-[150px] 2xl:h-[150px]"
            isTextarea={true}
          />
          <InputField
            name="date"
            type="date"
            isDisabled={isDisabled}
            additionalStyles="md:h-[50px]"
          />
          <div className="w-full flex justify-center">
            <Button
              additionalStyles=" w-full mt-10 md:h-[65px] md:mt-[15px] self-center"
              isDisabled={isDisabled}
            >
              {isLoading
                ? "Loading..."
                : `${isDisabled ? "Already done" : "Update"}`}
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
