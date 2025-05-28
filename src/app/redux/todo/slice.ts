import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IToDoReceived, TodoState } from "./typesOrInterfaces";
import { getTodo, postTodo, updateStatus, updateToDo } from "./operations";

const initialState: TodoState = {
  isLoading: false,
  error: null,
  todo: [],
};

const handleLoading = (state: TodoState) => {
  state.isLoading = false;
  state.error = null;
};

const handleError = (
  state: TodoState,
  action: PayloadAction<{ error: string }>
) => {
  state.isLoading = false;
  state.error = action.payload.error;
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTodo.pending, handleLoading)
      .addCase(
        getTodo.fulfilled,
        (state: TodoState, action: PayloadAction<IToDoReceived[]>) => {
          state.isLoading = false;
          state.todo = action.payload;
        }
      )
      .addCase(getTodo.rejected, handleError)
      .addCase(postTodo.pending, handleLoading)
      .addCase(
        postTodo.fulfilled,
        (state: TodoState, action: PayloadAction<IToDoReceived>) => {
          state.isLoading = false;
          state.todo.push(action.payload);
        }
      )
      .addCase(postTodo.rejected, handleError)
      .addCase(updateToDo.pending, handleLoading)
      .addCase(
        updateToDo.fulfilled,
        (state: TodoState, action: PayloadAction<IToDoReceived>) => {
          state.isLoading = false;
          const changeId = state.todo.findIndex(
            (t) => t._id === action.payload._id
          );
          if (changeId !== -1) {
            state.todo.splice(changeId, 1, action.payload);
          }
        }
      )
      .addCase(updateToDo.rejected, handleError)
      .addCase(updateStatus.pending, handleLoading)
      .addCase(
        updateStatus.fulfilled,
        (state: TodoState, action: PayloadAction<IToDoReceived>) => {
          state.isLoading = false;
          const changeId = state.todo.findIndex(
            (t) => t._id === action.payload._id
          );
          if (changeId !== -1) {
            state.todo.splice(changeId, 1, action.payload);
          }
        }
      )
      .addCase(updateStatus.rejected, handleError);
  },
});

export const todoReducer = todoSlice.reducer;
