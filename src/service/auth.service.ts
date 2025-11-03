// src/service/http.ts
import axios from 'axios';

const base = import.meta.env.VITE_API_URL; // .env: VITE_API_URL=http://localhost:3003
if (!base) throw new Error('VITE_API_URL is not set');

export const API_URL = `${base}/api`;

export const http = axios.create({
  baseURL: API_URL,
  timeout: 15000,
  withCredentials: false, // cookie kerak bo‘lsa true
  headers: { 'Content-Type': 'application/json' },
});

// Request: token qo‘shish
http.interceptors.request.use((config) => {
  // localStorage brauzerda borligini tekshiramiz
  if (typeof window !== 'undefined') {
    const raw = localStorage.getItem('auth');
    if (raw) {
      try {
        const { token } = JSON.parse(raw) as { token?: string };
        if (token) config.headers.Authorization = `Bearer ${token}`;
      } catch {}
    }
  }
  return config;
});

// (Ixtiyoriy) Response: 401/403 ni ushlash
http.interceptors.response.use(
  (res) => res,
  async (error) => {
    if (error?.response?.status === 401) {
      // masalan, auto-logout:
      // localStorage.removeItem('auth');
      // window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);
