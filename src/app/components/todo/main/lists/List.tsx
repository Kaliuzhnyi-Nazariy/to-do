import React from "react";
// import ItemOfLists from "../items/ItemOfLists";
import { IToDoReceived, updateTodo } from "@/app/redux/todo/typesOrInterfaces";
// import TabletAndPCItem from "../items/TabletAndPCItem";
import MobViewList from "./MobViewList";
import TabletAndPCList from "./TabletAndPCList";

interface Prop {
  allToDoList: IToDoReceived[];
  allProgressList: IToDoReceived[];
  allDoneList: IToDoReceived[];
  setData: (data: updateTodo) => void;
  handleOpenModal: () => void;
  handleOpenCreateModal: () => void;
}

const List = ({
  allToDoList,
  allProgressList,
  allDoneList,
  setData,
  handleOpenModal,
  handleOpenCreateModal,
}: Prop) => {
  return (
    <>
      <MobViewList
        allToDoList={allToDoList}
        allProgressList={allProgressList}
        allDoneList={allDoneList}
        setData={setData}
        handleOpenModal={handleOpenModal}
        handleOpenCreateModal={handleOpenCreateModal}
      />
      <TabletAndPCList
        allToDoList={allToDoList}
        allProgressList={allProgressList}
        allDoneList={allDoneList}
        setData={setData}
        handleOpenModal={handleOpenModal}
        handleOpenCreateModal={handleOpenCreateModal}
      />

      {/* <ul className="flex flex-col gap-[15px] pt-[15px] pb-[15px] items-center h-full overflow-y-scroll w-[680px]">
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
      </ul> */}
    </>
  );
};

export default List;
