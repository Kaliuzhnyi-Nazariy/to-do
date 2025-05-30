"use client";

import { updateTodo } from "@/app/redux/todo/typesOrInterfaces";
import { Formik, Form } from "formik";
import { createToDoValidation } from "./validation";
import InputField from "../inputField";
import Button from "../button";
import { useAppDispatch } from "@/app/hooks/useAppDispatch";
import { updateToDo } from "@/app/redux/todo/operations";

export const UpdateToDoForm = ({
  data,
  onClose,
  isDisabled,
}: {
  data: updateTodo;
  onClose: () => void;
  isDisabled?: boolean;
}) => {
  // console.log(new Date(data.date).toISOString().split("T")[0]);

  // console.log(data);

  const initialValue: updateTodo = {
    _id: data._id,
    title: data.title || "",
    description: data.description || "",
    date: new Date(data.date).toISOString().split("T")[0] || "",
    // date: "",
  };

  // console.log(new Date(data.date).toISOString());

  const dispatch = useAppDispatch();

  return (
    <div className="flex h-full flex-col justify-center items-center">
      <h2 className="text-[24px] md:text-[48px]">Update to-do</h2>
      <Formik
        initialValues={initialValue}
        validationSchema={createToDoValidation}
        onSubmit={async (val) => {
          await dispatch(updateToDo({ ...val, endTime: val.date }));
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
            additionalStyles="md:h-[150px]"
            isTextarea={true}
          />
          <InputField
            name="date"
            type="date"
            isDisabled={isDisabled}
            additionalStyles="md:h-[50px]"
          />
          <Button
            signup={false}
            additionalStyles=" md:h-[65px] md:mt-[15px] self-center"
          >
            {isDisabled ? "Already done" : "Update"}
          </Button>
        </Form>
      </Formik>
    </div>
  );
};
