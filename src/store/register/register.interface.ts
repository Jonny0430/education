


export interface RegisterInput {
  memberNick: string;
  memberPassword: string;
  memberPhone: string;
  data?: string;
  // другие поля для регистрации...
}

export type LoginInput = {
     memberNick: string;
     memberPassword: string;
     data?: string;
}
export interface InitialStateProduce {
  data: RegisterInput | LoginInput | null;
  status: 'loading' | 'success' | 'error';
  error: string | null;
}

export type LoginResponse = {
  token: string;
   id: string;
    memberNick: string;
    memberImage?: string;
    memberPassword: string;
    avatarUrl: string;
  member: {
    id: number;
    memberNick: string;
    memberImage?: string | null | undefined;
    memberPassword: string;
  };
};

export type RegisterResponse = {
  token: string;
  member: {
    id: number;
    memberNick: string;
    memberImage?: string | null | undefined;
    memberPassword: string;
    memberPhone: string;
  };
};

export interface AuthMember {
  memberNick: string;
  memberImage?: string;
}

export type ApiError = { message: string; code?: number };

