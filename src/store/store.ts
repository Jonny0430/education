import { configureStore } from '@reduxjs/toolkit'
import { registerReducer } from './register/register.slice'
import { authReducer, hydrateFromStorage } from './auth/auth.slice'


export const store = configureStore({
    reducer: {
        register: registerReducer,
        reducer:  authReducer 
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;


// App startida localStorage’dan tiklash:
try {
  const raw = localStorage.getItem('auth');
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  if (raw) store.dispatch(hydrateFromStorage(JSON.parse(raw)));
} catch { /* empty */ }