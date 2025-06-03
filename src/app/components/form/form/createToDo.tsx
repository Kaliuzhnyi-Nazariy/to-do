import { CreateTodo } from "@/app/redux/todo/typesOrInterfaces";
import { Formik, Form } from "formik";
import { createToDoValidation } from "./validation";
import { useAppDispatch } from "@/app/hooks/useAppDispatch";
import { postTodo } from "@/app/redux/todo/operations";
import InputField from "../inputField";
import Button from "../button";
import { useSelector } from "react-redux";
import { todoLoading } from "@/app/redux/todo/selectors";
import { toast } from "react-toastify";

export const CreateToDo = ({ onClose }: { onClose: () => void }) => {
  const dispatch = useAppDispatch();

  const initialValue: CreateTodo = {
    title: "",
    description: "",
    date: new Date().toISOString().split("T")[0] || "",
  };

  const isLoading = useSelector(todoLoading);

  return (
    <div className="flex h-full flex-col justify-center items-center">
      <h2 className="text-2xl md:text-5xl">Create to-do</h2>
      <Formik
        initialValues={initialValue}
        validationSchema={createToDoValidation}
        onSubmit={async (val) => {
          const res = await dispatch(postTodo({ ...val, endTime: val.date }));
          if (res.payload._id) {
            toast.success("To-do is updated!", { theme: "colored" });
          } else {
            toast.error(res.payload, { theme: "colored" });
          }
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
          <div className="w-full flex justify-center">
            <Button additionalStyles=" w-full md:h-[65px] self-center mt-[35px] md:mt-[15px] ">
              {isLoading ? "Loading..." : "Create"}
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
