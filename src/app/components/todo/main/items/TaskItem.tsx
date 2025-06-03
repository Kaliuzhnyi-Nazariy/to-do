import { useAppDispatch } from "@/app/hooks/useAppDispatch";
import { updateStatus } from "@/app/redux/todo/operations";
import { IToDoReceived, updateTodo } from "@/app/redux/todo/typesOrInterfaces";
import React from "react";
import { toast } from "react-toastify";

const TaskItem = ({
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

  const timeLeft: number = Date.parse(String(task.endTime)) - Date.now();
  const isExtra = timeLeft <= 86400000;

  return (
    <li
      className="pl-5 w-[280px] min-h-[40px] rounded-[25px] flex flex-row justify-between relative md:w-[590px] md:min-h-[70px] 2xl:w-[330px]"
      style={{ backgroundColor: liColor }}
      onClick={() => {
        setData({
          title: task.title,
          description: task.description,
          date: task.endTime,
          _id: task._id,
          status: task.status,
        });
        handleOpenModal();
      }}
    >
      <div className="w-[80%] 2xl:w-[70%]">
        <h2 className="text-[16px] w-[70%] whitespace-nowrap overflow-hidden text-ellipsis md:text-[24px]">
          {task.title}
        </h2>
        <p className="text-[12px] w-[70%] whitespace-nowrap overflow-hidden text-ellipsis md:text-[16px]">
          {task.description || ""}
        </p>
      </div>
      {task.status !== "done" ? (
        <button
          className="w-[50px] h-[40px] rounded-tr-[25px] rounded-br-[25px] md:h-[70px] md:w-[125px] md:text-[36px] font-bold 2xl:w-[70px]"
          style={{ backgroundColor: btnColor }}
          onClick={async (e: React.MouseEvent<HTMLElement>) => {
            e.stopPropagation();
            console.log(task);
            const res = await dispatch(
              updateStatus({ id: task._id, status: statusToChange })
            );
            if (res.payload._id) {
              toast.success("To-do is updated!", { theme: "colored" });
            } else {
              toast.error(res.payload, { theme: "colored" });
            }
          }}
        >
          ✓
        </button>
      ) : (
        <></>
      )}
      {isExtra && task.status !== "done" ? (
        <div className="absolute w-[15px] h-[15px] rounded-full bg-red-500 top-0 left-0 text-[12px] flex items-center justify-center md:w-[30px] md:h-[30px] md:top-[-10px] md:left-[-10px]">
          !
        </div>
      ) : (
        <></>
      )}
    </li>
  );
};

export default TaskItem;
