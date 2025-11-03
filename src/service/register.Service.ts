import { api } from '../config/api/config';
import type { LoginInput, LoginResponse, RegisterInput, RegisterResponse } from '../store/register/register.interface';

class registerService {
  async postRegisters(body: RegisterInput): Promise<RegisterResponse> {
    const { data } = await api.post<RegisterResponse>('/api/user/signup', body);
    return data;
  }

  async postLogins(body: LoginInput): Promise<LoginResponse> {
    const { data } = await api.post<LoginResponse>('/api/user/login', body);
    return data;
  }
}
export default new registerService();
