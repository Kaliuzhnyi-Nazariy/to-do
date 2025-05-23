import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[var(--authbgc)] text-[14px] min-h-screen flex flex-col justify-center px-10 md:text-[18px] 2xl:text-[24px]">
      <h1 className="w-full flex justify-center text-[32px] md:text-[48px] 2xl:text-[56px]">
        MY TO-DO PLANNER
      </h1>
      <i className="w-full flex justify-center mt-4">
        Your day, organized your way.
      </i>
      <p className="mt-4 text-center">
        Stay on top of everything that matters with your new favorite to-do app.
        Whether you&apos;re managing work projects, personal goals, or daily
        errands, TaskFlow helps you focus, prioritize, and get things done — one
        step at a time.
      </p>

      <ul className="mt-3 2xl:mt-5">
        <li>✅ Create and organize tasks effortlessly</li>
        <li>📅 Set deadlines and reminders </li>
        <li>🌟 Track progress and celebrate achievements</li>
        <li>
          🌈 Clean, clutter-free interface designed for productivity Ready to
          take control of your time?
        </li>
      </ul>

      <p className="mt-3 text-center 2xl:mt-10">
        Let’s get started — your first task is just a tap away!
      </p>
      <ul className="mt-3 flex flex-col items-center gap-2 md:flex-row md:justify-center 2xl:mt-5 2xl:justify-around">
        <li className="w-[150px] h-9 rounded-[25px] bg-[var(--darkpurple)] text-center text-[20px] flex justify-center items-center 2xl:w-[256px] 2xl:h-14 2xl:text-[32px] hover:scale-110 active:scale-110 transition">
          <Link href={"/auth/signup"}>Get started!</Link>
        </li>
        <li className="w-[150px] h-9 rounded-[25px] bg-[var(--darkerpurple)] text-center text-[20px] flex justify-center items-center 2xl:w-[256px] 2xl:h-14 2xl:text-[32px] hover:scale-110 active:scale-110 transition">
          <Link href={"/auth/signin"}>Sign In</Link>
        </li>
      </ul>
    </div>
  );
}
