"use client";

import * as React from "react";
import { useEffect } from "react";
import { useAppDispatch } from "@/app/hooks/useAppDispatch";
import { getTodo } from "@/app/redux/todo/operations";
import { Modal } from "../../modal/Modal";
import { UpdateToDoForm } from "../../form/form/updateTodoForm";
import { updateTodo } from "@/app/redux/todo/typesOrInterfaces";
import { CreateToDo } from "../../form/form/createToDo";
import { useSelector } from "react-redux";
import {
  todosDone,
  todosProgress,
  todosToDo,
} from "@/app/redux/todo/selectors";
import List from "./lists/List";

export default function MainPage() {
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [isCreateModalOpen, setCreateModalOpen] = React.useState(false);
  const dispatch = useAppDispatch();

  const allToDoList = useSelector(todosToDo);
  const allProgressList = useSelector(todosProgress);
  const allDoneList = useSelector(todosDone);

  useEffect(() => {
    dispatch(getTodo());
  }, [dispatch]);

  const [data, setData] = React.useState({} as updateTodo);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleOpenCreateModal = () => {
    setCreateModalOpen(true);
  };

  const handleCloseCreateModal = () => {
    setCreateModalOpen(false);
  };

  return (
    <div className="bg-[var(--appbgc)] h-[calc(100%-110px)] md:flex md:flex-col md:items-center overflow-x-hidden md:h-[calc(100%-200px)] 2xl:h-[calc(100%-210px)]">
      <List
        allToDoList={allToDoList}
        allProgressList={allProgressList}
        allDoneList={allDoneList}
        setData={setData}
        handleOpenModal={handleOpenModal}
        handleOpenCreateModal={handleOpenCreateModal}
      />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <UpdateToDoForm
          data={data}
          onClose={handleCloseModal}
          isDisabled={data.status === "done"}
        />
      </Modal>
      <Modal isOpen={isCreateModalOpen} onClose={handleCloseCreateModal}>
        <CreateToDo onClose={handleCloseCreateModal} />
      </Modal>
    </div>
  );
}
