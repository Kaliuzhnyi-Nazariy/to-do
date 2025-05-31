import { createAsyncThunk } from "@reduxjs/toolkit";
import { IGetUser, IUserUPD } from "./typesOrInterfaces";
import axiosInstance from "../axios";

export const getMe = createAsyncThunk<
  IGetUser,
  void, // eslint-disable-next-line @typescript-eslint/no-explicit-any
  { rejectValue: any }
>("user/getMe", async (_, { rejectWithValue }) => {
  try {
    const res = await axiosInstance.get("/user/me");
    return res.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return rejectWithValue(error?.response.error || "Cannot update user data!");
  }
});

export const updateUser = createAsyncThunk<
  IGetUser,
  IUserUPD,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  { rejectValue: any }
>("user/update", async (data, { rejectWithValue }) => {
  try {
    const res = await axiosInstance.put("/user/update", data);

    if (!res.data)
      return rejectWithValue(res?.data?.error || "Cannot update user data!");

    return res.data;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return rejectWithValue(error?.response.error || "Cannot update user data!");
  }
});

export const deleteUser = createAsyncThunk<
  unknown,
  void, // eslint-disable-next-line @typescript-eslint/no-explicit-any
  { rejectValue: any }
>("user/logout", async (_, { rejectWithValue }) => {
  try {
    const res = await axiosInstance.delete("/user/delete");

    return res.data;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return rejectWithValue(error?.response.error || "Cannot update user data!");
  }
});
