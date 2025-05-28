import { CreateTodo } from "@/app/redux/todo/typesOrInterfaces";
import { object, string } from "yup";

export const createToDoValidation = object<CreateTodo>({
  title: string().required("Title is required!"),
  description: string().max(256, "Can contain up to 256 caracters!"),
  date: string(),
});
