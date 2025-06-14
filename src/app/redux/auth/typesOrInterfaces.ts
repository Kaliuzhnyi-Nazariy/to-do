export interface AuthInitialState {
  _id?: string | unknown;
  email: string;
  name: string;
  isLoading: boolean;
  error: string | null;
  isLoggedIn: boolean;
}

export interface IUser {
  _id: string | unknown;
  name: string;
  email: string;
  [x: string]: unknown;
}
