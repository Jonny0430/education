// store/register/register.slice.ts
import { createSlice } from '@reduxjs/toolkit';
import { postLogin, postRegister } from './register.action';
import type { LoginResponse, RegisterResponse } from './register.interface';

type Status = 'idle' | 'loading' | 'success' | 'error';
type AuthData = LoginResponse | RegisterResponse;

type State = {
  data: AuthData | null;
  status: Status;
  error: string | null;
};

const initialState: State = { data: null, status: 'idle', error: null };

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // LOGIN
    builder
      .addCase(postLogin.pending, (s) => {
        s.status = 'loading';
        s.error = null;
      })
      .addCase(postLogin.fulfilled, (s, a) => {
        s.status = 'success';
        s.data = a.payload; // LoginResponse
      })
      .addCase(postLogin.rejected, (s, a) => {
        s.status = 'error';
        s.error = (a.payload as unknown as string) ?? a.error?.message ?? 'Login failed';
      });

    // REGISTER
    builder
      .addCase(postRegister.pending, (s) => {
        s.status = 'loading';
        s.error = null;
      })
      .addCase(postRegister.fulfilled, (s, a) => {
        s.status = 'success';
        s.data = a.payload; // RegisterResponse
      })
      .addCase(postRegister.rejected, (s, a) => {
        s.status = 'error';
        s.error = (a.payload as unknown as string) ?? a.error?.message ?? 'Registration failed';
      });
  },
});

export const registerReducer = registerSlice.reducer;
