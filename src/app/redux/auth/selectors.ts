import { IStore } from "../store";

export const authLoading = (state: IStore) => state.auth.isLoading;
export const isLoggedIn = (state: IStore) => state.auth.isLoggedIn;
