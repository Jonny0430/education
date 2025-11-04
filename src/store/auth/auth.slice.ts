// src/store/auth/auth.slice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { postLogin, postRegister } from "../register/register.action";
import { MemberType } from "../../lib/enum.member";

// ==== Types ====
export type AuthUser = {
  id: string;
  memberNick: string;
  memberPhone: string;
  memberImage: string | null;
  avatarUrl: string | null;
  // Backend formatlari bilan mos bo‘lishi uchun union qildik:
  memberType: MemberType | "ADMIN" | "USER" | number | undefined;
  token: string;
};

type Status = "idle" | "loading" | "success" | "error";

export type AuthState = {
  status: Status;
  data: AuthUser | null;
  error: string | null;
};

// ==== Helpers ====
const STORAGE_KEY = "auth";

/** Backend javobini UI state'ga moslaydi (har ikki holatni: {member, token} yoki tekis) */
function normalizePayload(payload: any): AuthUser {
  const m = payload?.member ?? payload ?? {};
  const token = payload?.token ?? m?.token ?? "";

  return {
    id: String(m?.id ?? ""),
    memberNick: m?.memberNick ?? "",
    memberPhone: m?.memberPhone ?? "",
    memberImage: m?.memberImage ?? null,
    avatarUrl: m?.memberImage ?? null,
    memberType: m?.memberType, // fallback bermaymiz (xavfsiz)
    token,
  };
}

/** Role tekshiruvini barcha formatlar uchun xavfsiz qiladi */
export function isAdminType(t: unknown): boolean {
  return (
    t === MemberType.ADMIN ||
    t === "ADMIN" ||
    t === 1 ||
    t === "1"
  );
}

// ==== Initial State ====
const initialState: AuthState = {
  status: "idle",
  data: null,
  error: null,
};

// ==== Slice ====
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    /** App startida localStorage'dan o‘qib, state'ni to‘ldirish */
    hydrateFromStorage(s, { payload }: PayloadAction<AuthUser | null>) {
      s.data = payload ?? null;
      s.status = payload ? "success" : "idle";
      s.error = null;
    },
    /** Logout */
    logout(s) {
      s.data = null;
      s.status = "idle";
      s.error = null;
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {
        /* ignore */
      }
    },
  },
  extraReducers: (b) => {
    // REGISTER
    b.addCase(postRegister.pending, (s) => {
      s.status = "loading";
      s.error = null;
    });
    b.addCase(postRegister.fulfilled, (s, { payload }) => {
      const user = normalizePayload(payload);
      s.status = "success";
      s.data = user;
      s.error = null;
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
      } catch {
        /* ignore */
      }
    });
    b.addCase(postRegister.rejected, (s, a) => {
      s.status = "error";
      s.error =
        (a.payload as unknown as string) ??
        a.error?.message ??
        "Register failed";
    });

    // LOGIN
    b.addCase(postLogin.pending, (s) => {
      s.status = "loading";
      s.error = null;
    });
    b.addCase(postLogin.fulfilled, (s, { payload }) => {
      const user = normalizePayload(payload);
      s.status = "success";
      s.data = user;
      s.error = null;
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
      } catch {
        /* ignore */
      }
    });
    b.addCase(postLogin.rejected, (s, a) => {
      s.status = "error";
      s.error =
        (a.payload as unknown as string) ??
        a.error?.message ??
        "Login failed";
    });
  },
});

export const { logout, hydrateFromStorage } = authSlice.actions;
export const authReducer = authSlice.reducer;

// ==== Selectors (Navbar/Guard uchun qulay) ====
export const selectAuth = (s: any) => s.auth as AuthState;
export const selectAuthStatus = (s: any) => (s.auth as AuthState).status;
export const selectAuthUser = (s: any) => (s.auth as AuthState).data;
export const selectIsAuthed = (s: any) => Boolean((s.auth as AuthState).data?.token);
export const selectIsAdmin = (s: any) =>
  isAdminType((s.auth as AuthState).data?.memberType);

// ==== Hydrate helper (App/Root'da ishlating) ====
export function loadAuthFromStorageSafe(): AuthUser | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as AuthUser;
    // Minimal validatsiya
    if (!parsed || typeof parsed !== "object") return null;
    return parsed;
  } catch {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
    return null;
  }
}
