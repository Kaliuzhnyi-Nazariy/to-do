import SignUpForm from "@/app/components/form/form/signupForm";
import Image from "next/image";

export default function SignUp() {
  return (
    <div className="bg-[var(--authbgc)] w-[100vw] min-h-screen py-4 flex flex-col justify-center md:bg-[var(--darkerpurple)] md:items-center md:py-[22px] 2xl:p-0 overflow-y-hidden">
      <div
        className="md:bg-[var(--authbgc)] flex flex-col justify-center h-[530px] md:w-[720px] md:min-h-[960px] md:rounded-[25px] 2xl:w-[1350px] 2xl:min-h-[740px] 2xl:grid 2xl:rounded-[55px] overflow-hidden"
        style={{ gridTemplateColumns: "repeat(2, 1fr)" }}
      >
        <Image
          src="/img_for_auth.png"
          alt="schedule and planner"
          width={420}
          height={740}
          className="hidden 2xl:block 2xl:row-start-1 2xl:row-end-2 w-[420px] 2xl:h-[740px] object-fill justify-self-center align-middle"
        />

        <div className=" 2xl:col-start-2 2xl:h-[740px]">
          <h1
            className="uppercase text-[var(--text)] w-full flex justify-center font-bold text-[32px] md:text-[48px] 2xl:mt-[50px]
     "
          >
            MY TO-DO PLANNER
          </h1>

          <SignUpForm />
        </div>
      </div>
    </div>
  );
}
