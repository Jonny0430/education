import { createSlice } from "@reduxjs/toolkit";
import type { AuthMember } from "./auth.interface";
import { postLogin } from "../register/register.action";


type Status = 'idle'|'loading'|'success'|'error';
export type AuthState = {
  status: Status;
  data: { id: string; memberNick: string; memberPhone: string; memberPassword: string; memberImage: string;  token: string } | null;
  error: string | null;
};

const initialState: AuthMember = {
    status: 'idle',
    data: null,
    error: null,
};


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    hydrateFromStorage(s, { payload }: { payload: AuthState['data'] }) {
      s.data = payload
        ? { ...payload, avatarUrl: payload.memberImage ?? payload.memberImage ?? "" }
        : null;
      s.status = payload ? 'success' : 'idle';
      s.error = null;
    },
    logout(s) {
      s.data = null;
      s.status = 'idle';
      s.error = null;
      localStorage.removeItem('auth');
    }
  },
  extraReducers: (b) => {
    b.addCase(postLogin.pending,   (s) => { s.status = 'loading'; s.error = null; });
    b.addCase(postLogin.fulfilled, (s, a) => {
      s.status = 'success';
      // normalize memberImage to avoid assigning null into state (convert null -> undefined)
      s.data = a.payload
        ? { ...a.payload, memberImage: a.payload.memberImage ?? undefined }
        : null;
      localStorage.setItem('auth', JSON.stringify(a.payload)); // persist
    });
    b.addCase(postLogin.rejected,  (s, a) => {
      s.status = 'error'; s.error = (a.payload as unknown as string) ?? 'Login failed';
    });
  },
});

export const { logout, hydrateFromStorage } = authSlice.actions;
export const authReducer = authSlice.reducer;