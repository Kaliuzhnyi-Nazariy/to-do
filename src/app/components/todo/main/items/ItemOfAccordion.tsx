import { useAppDispatch } from "@/app/hooks/useAppDispatch";
import { updateStatus } from "@/app/redux/todo/operations";
import { IToDoReceived, updateTodo } from "@/app/redux/todo/typesOrInterfaces";
import React from "react";

const ItemOfAccordion = ({
  liColor,
  btnColor,
  setData,
  handleOpenModal,
  task,
}: {
  liColor: string;
  btnColor: string;
  setData: (data: updateTodo) => void;
  handleOpenModal: () => void;
  task: IToDoReceived;
}) => {
  const dispatch = useAppDispatch();

  const statusToChange = task.status === "todo" ? "progress" : "done";

  return (
    <li
      className="pl-5 w-[280px] h-[40px] rounded-[25px] flex flex-row justify-between"
      style={{ backgroundColor: liColor }}
      onClick={() => {
        setData({
          title: task.title,
          description: task.description,
          date: task.endTime,
          _id: task._id,
        });
        handleOpenModal();
      }}
    >
      <div className="">
        <h2 className="text-[16px]">{task.title}</h2>
        <p className="text-[12px]">{task.description || ""}</p>
      </div>
      {task.status !== "done" ? (
        <button
          className="w-[50px] h-[40px]  rounded-tr-[25px] rounded-br-[25px]"
          style={{ backgroundColor: btnColor }}
          onClick={async (e: React.MouseEvent<HTMLElement>) => {
            e.stopPropagation();
            console.log(task);
            await dispatch(
              updateStatus({ id: task._id, status: statusToChange })
            );
          }}
        >
          ✓
        </button>
      ) : (
        <></>
      )}
    </li>
  );
};

export default ItemOfAccordion;
