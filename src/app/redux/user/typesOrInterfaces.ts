import { IUser } from "../auth/typesOrInterfaces";

export interface UserState {
  _id?: string | unknown;
  email: string;
  name: string;
  allTasks: number;
  isLoading: boolean;
  error: string | null;
}

export interface IUserUPD {
  name: string;
  email: string;
  password: string;
}

export interface IGetUser extends IUser {
  allTasks: number;
}
