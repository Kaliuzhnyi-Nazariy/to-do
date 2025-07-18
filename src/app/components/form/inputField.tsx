import { ErrorMessage, Field } from "formik";
import HeaderField from "./headerForm";
import ErrorComp from "./error";

export default function InputField({
  name,
  type,
  isDisabled = false,
  additionalStyles = "",
  isTextarea = false,
  changeType,
}: {
  name: string;
  type: string;
  isDisabled?: boolean;
  additionalStyles?: string;
  isTextarea?: boolean;
  changeType?: boolean;
}) {
  return (
    <div className="mt-[15px] w-[240px]  max-md:min-h-[80px]">
      <HeaderField>{name}: </HeaderField>

      <Field
        name={name}
        type={changeType && type === "password" ? "text" : type}
        placeholder="Enter data..."
        className={`w-[240px] h-10 bg-white rounded-3xl px-5 placeholder:text-black placeholder:opacity-50 focus-visible:outline-2 focus-visible:outline-[var(--darkerpurple)] text-black md:w-[440px] md:h-16 2xl:h-[50px] ${additionalStyles} ${
          isTextarea ? "resize-none relative" : ""
        }`}
        disabled={isDisabled}
        as={isTextarea ? "textarea" : "input"}
      />
      <ErrorMessage
        name={name}
        component={ErrorComp}
        className="md:w-[440px]"
      />
    </div>
  );
}
