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
    <header className="h-[60px] w-full grid grid-cols-2 grid-rows-2 bg-[var(--darkerpurple)] px-[15px]">
      <h1 className="grid row-start-1 self-center">MY TO-DO PLANNER</h1>
      <p className="grid row-start-2 text-[12px] self-center">
        all tasks amount - {allTasksValue}
      </p>

      <Dropdown />
    </header>
  );
}
