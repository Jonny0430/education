import { MemberType } from "../../lib/enum.member";

export type Status = 'idle' | 'loading' | 'success' | 'error';


export type Member = {
    id: string;
    memberNick: string;
    memberPassword: string;
    memberPhone?: string;
    memberImage?: string;
    avatarUrl: string | null;
    memberType: MemberType.ADMIN
};


export type LoginResponse = Member & { token: string };

export interface AuthMember {
    status: Status;
    data: LoginResponse | null;
    error: string | null;
}