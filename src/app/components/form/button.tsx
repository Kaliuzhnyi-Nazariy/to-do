export default function Button({
  type,
  signup,
  children,
}: {
  type?: "button" | "submit" | "reset";
  signup: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      type={type ? type : "submit"}
      className={
        "bg-[var(--darkpurple)] w-[240px] h-9 rounded-[25px] text-[20px] md:w-[220px] md:h-[84px] md:text-[32px] 2xl:h-[65px] " +
        (signup ? " mt-[25px] md:mt-10 2xl:mt-[30px]" : " mt-10")
      }
    >
      {children}
    </button>
  );
}
