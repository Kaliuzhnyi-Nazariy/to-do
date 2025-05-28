import { CreateTodo } from "@/app/redux/todo/typesOrInterfaces";
import { Formik, Form } from "formik";
import { createToDoValidation } from "./validation";
import { useAppDispatch } from "@/app/hooks/useAppDispatch";
import { postTodo } from "@/app/redux/todo/operations";
import InputField from "../inputField";
import Button from "../button";

export const CreateToDo = ({ onClose }: { onClose: () => void }) => {
  const dispatch = useAppDispatch();

  const initialValue: CreateTodo = {
    title: "",
    description: "",
    date: new Date().toISOString().split("T")[0] || "",
  };

  return (
    <div className="flex h-full flex-col justify-center items-center">
      <h2 className="text-[24px]">Create to-do</h2>
      <Formik
        initialValues={initialValue}
        validationSchema={createToDoValidation}
        onSubmit={async (val) => {
          await dispatch(postTodo({ ...val, endTime: val.date }));
          onClose();
        }}
      >
        <Form>
          <InputField name="title" type="text" />
          <InputField name="description" type="text" />
          <InputField name="date" type="date" />
          <Button signup={false}>Create</Button>
        </Form>
      </Formik>
    </div>
  );
};
