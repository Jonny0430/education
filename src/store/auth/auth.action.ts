import { createAsyncThunk } from '@reduxjs/toolkit';
import { http } from '../../service/auth.service';

export type LoginInput = { memberNick: string; memberPassword: string };
export type LoginResponse = { id: string; email: string; name: string; token: string };

export const postLogin = createAsyncThunk<
  LoginResponse, LoginInput, { rejectValue: string }
>('auth/postLogin', async (body, { rejectWithValue }) => {
  try {
    const { data } = await http.post<LoginResponse>('/api/user/login', body);
    return data;
  } catch (e: any) {
    return rejectWithValue(String(e?.response?.data?.message ?? e?.message ?? 'Login failed'));
  }
});
