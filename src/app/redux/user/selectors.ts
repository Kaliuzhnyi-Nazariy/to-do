import { IStore } from "../store";

export const username = (state: IStore) => state.user.name;
export const email = (state: IStore) => state.user.email;
export const allTasks = (state: IStore) => state.user.allTasks;
