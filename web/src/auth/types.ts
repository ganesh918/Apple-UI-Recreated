export interface AuthUser {
  email: string;
  name: string;
}

export interface StoredUser extends AuthUser {
  passwordHash: string;
}

export interface AuthSession {
  email: string;
  name: string;
}
