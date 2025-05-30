import { IToDoReceived, updateTodo } from "@/app/redux/todo/typesOrInterfaces";
import React from "react";
import TabletAndPCItem from "../items/TabletAndPCItem";

interface Prop {
  allToDoList: IToDoReceived[];
  allProgressList: IToDoReceived[];
  allDoneList: IToDoReceived[];
  setData: (data: updateTodo) => void;
  handleOpenModal: () => void;
  handleOpenCreateModal: () => void;
}

const TabletAndPCList = ({
  allToDoList,
  allProgressList,
  allDoneList,
  setData,
  handleOpenModal,
  handleOpenCreateModal,
}: Prop) => {
  return (
    <ul className="hidden flex-col gap-[15px] pt-[15px] pb-[15px] items-center h-full overflow-hidden w-[680px] md:flex">
      <TabletAndPCItem
        title="to-do"
        tasks={allToDoList}
        setData={setData}
        handleOpenModal={handleOpenModal}
        handleOpenCreateModal={handleOpenCreateModal}
      />
      <TabletAndPCItem
        title="progress"
        tasks={allProgressList}
        setData={setData}
        handleOpenModal={handleOpenModal}
        handleOpenCreateModal={handleOpenCreateModal}
      />
      <TabletAndPCItem
        title="done"
        tasks={allDoneList}
        setData={setData}
        handleOpenModal={handleOpenModal}
        handleOpenCreateModal={handleOpenCreateModal}
      />
    </ul>
  );
};

export default TabletAndPCList;
