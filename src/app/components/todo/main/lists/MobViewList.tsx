import { IToDoReceived, updateTodo } from "@/app/redux/todo/typesOrInterfaces";
import ItemOfLists from "../items/ItemOfLists";

interface Prop {
  allToDoList: IToDoReceived[];
  allProgressList: IToDoReceived[];
  allDoneList: IToDoReceived[];
  setData: (data: updateTodo) => void;
  handleOpenModal: () => void;
  handleOpenCreateModal: () => void;
}

const MobViewList = ({
  allToDoList,
  allProgressList,
  allDoneList,
  setData,
  handleOpenModal,
  handleOpenCreateModal,
}: Prop) => {
  return (
    <ul className="flex flex-col gap-[15px] pt-[15px] pb-[15px] items-center h-full overflow-y-auto md:hidden overflow-x-hidden">
      <ItemOfLists
        title="to-do"
        tasks={allToDoList}
        setData={setData}
        handleOpenModal={handleOpenModal}
        handleOpenCreateModal={handleOpenCreateModal}
      />
      <ItemOfLists
        title="progress"
        tasks={allProgressList}
        setData={setData}
        handleOpenModal={handleOpenModal}
        handleOpenCreateModal={handleOpenCreateModal}
      />
      <ItemOfLists
        title="done"
        tasks={allDoneList}
        setData={setData}
        handleOpenModal={handleOpenModal}
        handleOpenCreateModal={handleOpenCreateModal}
      />
    </ul>
  );
};

export default MobViewList;
