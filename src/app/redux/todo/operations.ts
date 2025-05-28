import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  CreateTodoRequest,
  IToDoReceived,
  updateTodoRequest,
} from "./typesOrInterfaces";
import axiosInstance from "../axios";

export const getTodo = createAsyncThunk<
  IToDoReceived[],
  void, // eslint-disable-next-line @typescript-eslint/no-explicit-any
  { rejectValue: any }
>("todo/getTodo", async (_, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get("/todo");
    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return rejectWithValue(error.response?.data || "Signup failed");
  }
});

export const postTodo = createAsyncThunk<
  IToDoReceived,
  CreateTodoRequest, // eslint-disable-next-line @typescript-eslint/no-explicit-any
  { rejectValue: any }
>("todo/postTodo", async (data, { rejectWithValue }) => {
  try {
    const res = await axiosInstance.post("/todo", data);
    return res.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return rejectWithValue(error.response?.data || "Cannot create! Error!");
  }
});

export const updateToDo = createAsyncThunk<
  IToDoReceived,
  updateTodoRequest, // eslint-disable-next-line @typescript-eslint/no-explicit-any
  { rejectValue: any }
>("todo/update", async (data, { rejectWithValue }) => {
  try {
    const res = await axiosInstance.put(`/todo/${data._id}`, data);

    return res.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return rejectWithValue(error?.response.error || "Cannot update to-do!");
  }
});

export const updateStatus = createAsyncThunk<
  IToDoReceived,
  { id: string; status: string }, // eslint-disable-next-line @typescript-eslint/no-explicit-any
  { rejectValue: any }
>("todo/status", async ({ id, status }, { rejectWithValue }) => {
  try {
    const res = await axiosInstance.patch(`/todo/status/${id}`, { status });
    return res.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return rejectWithValue(error?.response.error || "Cannot update to-do!");
  }
});
