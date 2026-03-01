export interface User {
  id: string;
  name: string;
  email: string;
  role?: UserRole;
  avatar?: string;
}

export type UserRole = 'admin' | 'user' | 'guest';

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}
