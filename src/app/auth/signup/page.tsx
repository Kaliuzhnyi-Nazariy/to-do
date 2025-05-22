import SignUpForm from "@/app/components/form/form/signupForm";

export default function SignIn() {
  return (
    <div className="bg-[var(--authbgc)] w-[100vw] overflow-y-scroll min-h-screen py-5 flex flex-col justify-center">
      <h1
        className="uppercase text-[var(--text)] w-full flex justify-center font-bold text-[32px]
      "
      >
        MY TO-DO PLANNER
      </h1>
      <SignUpForm />
    </div>
  );
}
