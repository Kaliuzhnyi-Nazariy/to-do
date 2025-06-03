import { logout, signin, signup } from "./operations";
import { AuthInitialState, IUser } from "./typesOrInterfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const store: AuthInitialState = {
  email: "",
  name: "",
  isLoading: false,
  error: null,
  isLoggedIn: false,
};

const handleLoading = (state: { isLoading: boolean; error: string | null }) => {
  state.isLoading = true;
  state.error = null;
};

const handleError = (
  state: { isLoading: boolean; error: string | null; isLoggedIn: boolean },
  action: PayloadAction<{ error: string }>
) => {
  state.isLoading = false;
  state.error = action.payload?.error || "Something went wrong!";
  state.isLoggedIn = false;
};

const authSlice = createSlice({
  name: "auth",
  initialState: store,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, handleLoading)
      .addCase(
        signup.fulfilled,
        (state: AuthInitialState, action: PayloadAction<IUser>) => {
          state.isLoading = false;
          state._id = action.payload._id;
          state.email = action.payload.email;
          state.name = action.payload.name;
          state.isLoggedIn = true;
        }
      )
      .addCase(signup.rejected, handleError)
      .addCase(signin.pending, handleLoading)
      .addCase(
        signin.fulfilled,
        (state: AuthInitialState, action: PayloadAction<IUser>) => {
          state.isLoading = false;
          state._id = action.payload._id;
          state.email = action.payload.email;
          state.name = action.payload.name;
          state.isLoggedIn = true;
        }
      )
      .addCase(signin.rejected, handleError)
      .addCase(logout.pending, handleLoading)
      .addCase(logout.fulfilled, (state: AuthInitialState) => {
        state.isLoading = false;
        state._id = "";
        state.email = "";
        state.name = "";
        state.isLoggedIn = false;
      })
      .addCase(logout.rejected, handleError);
  },
});

export const authReducer = authSlice.reducer;
