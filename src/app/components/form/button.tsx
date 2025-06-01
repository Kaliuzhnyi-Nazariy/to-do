export default function Button({
  type,
  signup,
  children,
  additionalStyles = "",
  isDisabled = false,
  onClick,
  delModal,
}: {
  type?: "button" | "submit" | "reset";
  signup?: boolean;
  children: React.ReactNode;
  additionalStyles?: string;
  isDisabled?: boolean;
  onClick?: () => void;
  delModal?: boolean;
}) {
  return (
    <button
      type={type ? type : "submit"}
      className={
        "h-9 rounded-[25px] text-[20px] md:w-[220px] md:text-[32px] 2xl:h-[65px] " +
        (signup ? " mt-[25px] md:mt-10 2xl:mt-[30px] " : "  ") +
        additionalStyles +
        (delModal ? "" : "w-[240px] bg-[var(--darkpurple)]")
      }
      disabled={isDisabled}
      onClick={onClick ? () => onClick() : () => {}}
    >
      {children}
    </button>
  );
}
