import { ErrorMessage, Field } from "formik";
import HeaderField from "./headerForm";
import ErrorComp from "./error";

export default function InputField({
  name,
  type,
}: {
  name: string;
  type: string;
}) {
  return (
    <div className="mt-[15px] w-[240px] ">
      <HeaderField>{name}: </HeaderField>

      <Field
        name={name}
        type={type}
        placeholder="Enter your password..."
        className="w-[240px] h-10 bg-white rounded-3xl px-5 placeholder:text-black placeholder:opacity-50 focus-visible:outline-2 focus-visible:outline-[var(--darkerpurple)] text-black"
      />
      <ErrorMessage name={name} component={ErrorComp} />
    </div>
  );
}
