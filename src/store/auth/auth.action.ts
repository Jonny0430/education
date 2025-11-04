import { createAsyncThunk } from '@reduxjs/toolkit';
import { http } from '../../service/auth.service';
import { MemberType } from '../../lib/enum.member';

export type LoginInput = { memberNick: string; memberPassword: string };
export type LoginResponse = { id: string; memberNick: string; memberPassword: string; memberPhone: string; memberType: MemberType.ADMIN; token: string };

export const postLogin = createAsyncThunk<
  LoginResponse, LoginInput, { rejectValue: string }
>('auth/postLogin', async (body, { rejectWithValue }) => {
  try {
    const { data } = await http.post<LoginResponse>('/api/user/signup', body);
    return data;
  } catch (e: any) {
    return rejectWithValue(String(e?.response?.data?.message ?? e?.message ?? 'Login failed'));
  }
});
