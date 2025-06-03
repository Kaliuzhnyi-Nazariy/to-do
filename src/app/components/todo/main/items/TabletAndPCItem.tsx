import { IToDoReceived, updateTodo } from "@/app/redux/todo/typesOrInterfaces";
import TaskItem from "./TaskItem";
import { useSelector } from "react-redux";
import { todoLoading } from "@/app/redux/todo/selectors";

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

  const isLoading = useSelector(todoLoading);

  return (
    <div
      style={{ backgroundColor: bgc.main }}
      className="h-[250px] w-[680px] overflow-y-hidden relative 2xl:w-[380px] 2xl:h-[465px]"
    >
      <div
        className="flex text-[36px] h-[70px] justify-center 2xl:h-[65px]"
        style={{ backgroundColor: bgc.header }}
      >
        <h3 className="uppercase w-[680px] flex items-center justify-center 2xl:w-[360px]">
          {title}
        </h3>
        {title === "to-do" ? (
          <button
            className="absolute right-[15px] top-0 h-[70px] w-[70px] cursor-pointer 2xl:h-[65px]"
            onClick={() => handleOpenCreateModal()}
          >
            +
          </button>
        ) : (
          <></>
        )}
      </div>
      {isLoading ? (
        "Loading..."
      ) : (
        <ul className="flex flex-col gap-[15px] text-white p-[10px] overflow-y-auto md:px-[44px] md:py-5 overflow-x-hidden h-[calc(100%-70px)] 2xl:h-[calc(100%-65px)] 2xl:px-[25px]">
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
      )}
    </div>
  );
};

export default TabletAndPCItem;
