import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getMe, updateUser } from "./operations";
import { IGetUser, UserState } from "./typesORInterfaces";

const initialState: UserState = {
  _id: "",
  name: "",
  email: "",
  allTasks: 0,
  isLoading: false,
  error: null,
};

const handleLoading = (state: UserState) => {
  state.error = null;
  state.isLoading = true;
};

const handleReject = (
  state: UserState,
  action: PayloadAction<{ error: string }>
) => {
  state.isLoading = false;
  state.error = action.payload.error;
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getMe.pending, handleLoading)
      .addCase(
        getMe.fulfilled,
        (state: UserState, action: PayloadAction<IGetUser>) => {
          state._id = action.payload._id;
          state.name = action.payload.name;
          state.email = action.payload.email;
          state.allTasks = action.payload.allTasks;
          state.isLoading = false;
        }
      )
      .addCase(getMe.rejected, handleReject)
      .addCase(updateUser.pending, handleLoading)
      .addCase(
        updateUser.fulfilled,
        (state: UserState, action: PayloadAction<IGetUser>) => {
          state._id = action.payload._id;
          state.name = action.payload.name;
          state.email = action.payload.email;
          state.allTasks = action.payload.allTasks;
          state.isLoading = false;
        }
      )
      .addCase(updateUser.rejected, handleReject),
});

export const userReducer = userSlice.reducer;
