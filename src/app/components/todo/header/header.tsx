"use client";

import { useEffect } from "react";
import Dropdown from "./dropdown";
import { useAppDispatch } from "@/app/hooks/useAppDispatch";
import { getMe } from "@/app/redux/user/operations";
import { useSelector } from "react-redux";
import { allTasks } from "@/app/redux/user/selectors";

export default function ToDoHeader() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  const allTasksValue = useSelector(allTasks);

  return (
    <header className="h-[60px] w-full grid grid-cols-2 grid-rows-2 bg-[var(--darkerpurple)] px-[15px] md:h-[120px] md:flex md:flex-col md:items-center justify-center md:relevant 2xl:flex-row 2xl:justify-between">
      <h1 className="grid row-start-1 self-center md:text-[40px] 2xl:ml-[50px] 2xl:text-[48px]">
        MY TO-DO PLANNER
      </h1>
      <p className="grid row-start-2 text-[12px] self-center md:text-[20px] 2xl:mr-[290px] 2xl:text-[32px]">
        all tasks amount - {allTasksValue}
      </p>

      <Dropdown />
    </header>
  );
}
