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
      <h2 className="text-2xl md:text-5xl">Create to-do</h2>
      <Formik
        initialValues={initialValue}
        validationSchema={createToDoValidation}
        onSubmit={async (val) => {
          await dispatch(postTodo({ ...val, endTime: val.date }));
          onClose();
        }}
      >
        <Form className="md:w-[440px] md:flex md:flex-col">
          <InputField name="title" type="text" additionalStyles="md:h-[50px]" />
          <InputField
            name="description"
            type="text"
            isTextarea={true}
            additionalStyles="md:h-[150px]  2xl:h-[150px]"
          />
          <InputField name="date" type="date" additionalStyles="md:h-[50px]" />
          <Button additionalStyles=" md:h-[65px] self-center">Create</Button>
        </Form>
      </Formik>
    </div>
  );
};
