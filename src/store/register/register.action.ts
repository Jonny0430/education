import {  createAsyncThunk } from "@reduxjs/toolkit";
import registerService from "../../service/register.Service";
import { RegisterInput, RegisterResponse, type ApiError, type LoginInput,  type LoginResponse,   } from "./register.interface";
import { AxiosError } from "axios";




// export const postRegister = createAsyncThunk(
//     'register/postRegister',
//     async (body: RegisterInput) => {
//         const response = await registerService.postRegisters(body);
//         return response.data;
//     }
// )

export const postRegister = createAsyncThunk<
    RegisterResponse,
    RegisterInput,
    { rejectValue: ApiError }>(
        'register/postRegister',
        async (body, { rejectWithValue}) => {
            try {
                const data = await registerService.postRegisters(body);
                return data;
            } catch (e) {
                const err = e as AxiosError<ApiError>;
                return rejectWithValue(err.response?.data ?? { message: 'Unknown error' });
            }
        }
    )

export const postLogin = createAsyncThunk<
  LoginResponse,          // ✅ fulfilled payload
  LoginInput,             // ✅ thunk argument
  { rejectValue: ApiError } // ✅ reject payload
>(
  'register/postLogin',
  async (body, { rejectWithValue }) => {
    try {
      const data = await registerService.postLogins(body);
      return data; // data tipi aniq: LoginResponse
    } catch (e) {
      const err = e as AxiosError<ApiError>;
      return rejectWithValue(err.response?.data ?? { message: 'Unknown error' });
    }
  }
);