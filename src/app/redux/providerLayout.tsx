"use client";

import { Provider } from "react-redux";
import store, { persistorStore } from "./store";
import { PersistGate } from "redux-persist/integration/react";

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistorStore}>
        {children}
      </PersistGate>
    </Provider>
  );
}
