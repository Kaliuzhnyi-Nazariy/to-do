import { useAppDispatch } from "@/app/hooks/useAppDispatch";
import { getTodo } from "@/app/redux/todo/operations";
import { IToDoReceived, updateTodo } from "@/app/redux/todo/typesOrInterfaces";
import React, { useEffect } from "react";
import TaskItem from "./TaskItem";

interface Prop {
  title: string;
  tasks: IToDoReceived[];
  setData: (data: updateTodo) => void;
  handleOpenModal: () => void;
  handleOpenCreateModal: () => void;
}

const TabletAndPCItem = ({
  title,
  tasks,
  setData,
  handleOpenModal,
  handleOpenCreateModal,
}: Prop) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTodo());
  }, [dispatch]);

  const bgc = { header: "#1d7cbb", main: "#5cace1", btncolor: "#cfe5f3" };

  switch (title) {
    case "to-do":
      bgc.header = "#1d7cbb";
      bgc.main = "#5cace1";
      bgc.btncolor = "#cfe5f3";
      break;

    case "progress":
      bgc.header = "#d9bb41";
      bgc.main = "#f7dc6f";
      bgc.btncolor = "#e0d39f";
      break;

    case "done":
      bgc.header = "#45c97d";
      bgc.main = "#72de9f";
      break;

    default:
      bgc.main = "green";
      bgc.header = "green";
      bgc.btncolor = "green";
  }

  return (
    <div
      style={{ backgroundColor: bgc.main }}
      className="h-[250px] w-[680px] overflow-y-hidden relative"
    >
      <div
        className="flex text-[36px] h-[70px] justify-center "
        style={{ backgroundColor: bgc.header }}
      >
        <h3 className="uppercase w-[680px] flex items-center justify-center">
          {title}
        </h3>
        <button
          className="absolute right-[15px] top-0 h-[70px] w-[70px] cursor-pointer"
          onClick={() => handleOpenCreateModal()}
        >
          +
        </button>
      </div>
      <ul
        className="flex flex-col gap-[15px] text-white p-[10px] overflow-y-scroll md:px-[44px] md:py-5 overflow-x-hidden"
        style={{ height: "calc(100% - 70px)" }}
      >
        {tasks.length != 0 ? (
          tasks.map((task) => {
            return (
              <TaskItem
                liColor={bgc.header}
                btnColor={bgc.btncolor}
                key={task._id}
                task={task}
                handleOpenModal={handleOpenModal}
                setData={setData}
              />
            );
          })
        ) : (
          <li>
            <div className="">No tasks</div>
          </li>
        )}
      </ul>
    </div>
  );
};

export default TabletAndPCItem;
