import SigninForm from "@/app/components/form/form/signinForm";

export default function SignIn() {
  return (
    <div className="bg-[var(--authbgc)] w-[100vw] min-h-[568px] h-[100vh] overflow-hidden flex flex-col justify-center">
      <h1
        className="uppercase text-[var(--text)] w-full flex justify-center font-bold text-[32px]
      "
      >
        MY TO-DO PLANNER
      </h1>
      <SigninForm />
    </div>
  );
}
