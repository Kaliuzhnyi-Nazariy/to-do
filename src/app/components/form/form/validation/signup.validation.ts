import { ISignupForm } from "@/app/components/typesInterfaces";
import * as yup from "yup";

export const signupValidationSchema = yup.object<ISignupForm>({
  email: yup
    .string()
    .email("Enter valid email value")
    .required("Email field is required!"),
  name: yup
    .string()
    .min(2, "Must be longer than 2 characters!")
    .required("Name is required!"),
  password: yup
    .string()
    .min(6, "Must be longer than 6 characters")
    .max(16, "Must be shorter than 16 characters")
    .matches(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,16}$/,
      "Password should contain 6–16 characters, with at least one uppercase letter, one digit, and one special character."
    )
    .required("Password is required!"),
  confirmPassword: yup
    .string()
    .min(6, "Must be longer than 6 characters")
    .max(16, "Must be shorter than 16 characters")
    .matches(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,16}$/,
      "Password should contain 6–16 characters, with at least one uppercase letter, one digit, and one special character."
    )
    .required("Password is required!"),
});
