import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/slice";
import { AuthInitialState } from "./auth/typesOrInterfaces";
import { TodoState } from "./todo/typesOrInterfaces";
import { todoReducer } from "./todo/slice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import { userReducer } from "./user/slice";
import { UserState } from "./user/typesOrInterfaces";
export interface IStore {
  auth: AuthInitialState;
  todo: TodoState;
  user: UserState;
}

const authPersistedReducer = {
  key: "auth",
  storage,
  whitelist: ["token", "isLoggedIn"],
};

const persistedAuth = persistReducer(authPersistedReducer, authReducer);

const store = configureStore({
  reducer: {
    auth: persistedAuth,
    todo: todoReducer,
    user: userReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistorStore = persistStore(store);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
