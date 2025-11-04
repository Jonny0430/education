// src/lib/auth.ts

import { useAppSelector } from "../../hooks/hooks";
import { MemberType } from "../../lib/enum.member";

export function useAuth() {
  const user = useAppSelector((s: { reducer: { data: any; }; }) => s.reducer.data);
  const isLoggedIn = Boolean(user?.token);
  const isAdmin = user?.memberType === MemberType.ADMIN;
  return { user, isLoggedIn, isAdmin };
}

export type AuthUser = {
  id: string;
  memberNick: string;
  memberPhone: string;
  memberImage: string | null;
  avatarUrl: string | null;
  memberType: MemberType | 'ADMIN' | 'USER' | number; // <—
  token: string;
};
