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
        "bg-[var(--darkpurple)] w-[240px] h-9 rounded-[25px] text-[20px]" +
        (signup ? " mt-[25px]" : " mt-10")
      }
    >
      {children}
    </button>
  );
}
