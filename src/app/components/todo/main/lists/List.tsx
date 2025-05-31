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
    </>
  );
};

export default List;
