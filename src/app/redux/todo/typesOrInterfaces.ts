export interface ITodo {
  title: string;
  description?: string;
  endTime: string | Date;
  owner: string;
  status?: string;
  [x: string]: unknown;
}

export interface IToDoReceived extends ITodo {
  _id: string;
}

export interface TodoState {
  isLoading: boolean;
  error: null | string;
  todo: IToDoReceived[];
}

export interface CreateTodoRequest {
  title: string;
  description?: string;
  endTime: string | Date;
}

export interface CreateTodo {
  title: string;
  description?: string;
  date: string | Date;
}

export interface updateTodo {
  _id: string;
  title: string;
  description?: string;
  date: string | Date;
}

export interface updateTodoRequest {
  _id: string;
  title: string;
  description?: string;
  endTime: string | Date;
}
