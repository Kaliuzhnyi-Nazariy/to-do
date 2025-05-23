import { ISigninForm, ISignupForm } from "@/app/components/typesInterfaces";
import axiosInstance from "../axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "./typesOrInterfaces";

export const signup = createAsyncThunk<
  IUser,
  ISignupForm,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  { rejectValue: any }
>("auth/signup", async (data, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post("/auth/signup", data);

    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return rejectWithValue(error.response?.data || "Signup failed");
  }
});

export const signin = createAsyncThunk<
  IUser,
  ISigninForm,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  { rejectValue: any }
>("auth/signin", async (data, { rejectWithValue }) => {
  try {
    const res = await axiosInstance.post("/auth/signin", data);

    return res.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return rejectWithValue(error.response?.data || "Signin failed");
  }
});
