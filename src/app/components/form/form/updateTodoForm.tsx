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
}: {
  data: updateTodo;
  onClose: () => void;
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
      <h2 className="text-[24px]">Update to-do</h2>
      <Formik
        initialValues={initialValue}
        validationSchema={createToDoValidation}
        onSubmit={async (val) => {
          await dispatch(updateToDo({ ...val, endTime: val.date }));
          onClose();
        }}
      >
        <Form>
          <InputField name="title" type="text" />
          <InputField name="description" type="text" />
          <InputField name="date" type="date" />
          <Button signup={false}>Update</Button>
        </Form>
      </Formik>
    </div>
  );
};
