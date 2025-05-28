import { IStore } from "../store";

export const todosToDo = (state: IStore) =>
  state.todo.todo.filter((t) => t.status === "todo");
export const todosProgress = (state: IStore) =>
  state.todo.todo.filter((t) => t.status === "progress");
export const todosDone = (state: IStore) =>
  state.todo.todo.filter((t) => t.status === "done");
