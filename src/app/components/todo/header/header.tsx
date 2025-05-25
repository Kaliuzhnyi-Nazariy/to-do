import Dropdown from "./dropdown";

export default function ToDoHeader() {
  return (
    <header className="h-[60px] w-full grid grid-cols-2 grid-rows-2 bg-[var(--darkerpurple)] px-[15px]">
      <h1 className="grid row-start-1 self-center">MY TO-DO PLANNER</h1>
      <p className="grid row-start-2 text-[12px] self-center">
        all tasks amount - x
      </p>

      <Dropdown />
    </header>
  );
}
