import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/slice";
import { AuthInitialState } from "./auth/typesOrInterfaces";

export interface IStore {
  auth: AuthInitialState;
}

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
