import type { AuthSession, StoredUser } from './types';

const USERS_KEY = 'apple-ui-users';
const SESSION_KEY = 'apple-ui-session';

/** Demo-friendly hash — not for production secrets. */
export async function hashPassword(password: string): Promise<string> {
  const data = new TextEncoder().encode(password);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

function readUsers(): StoredUser[] {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as StoredUser[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeUsers(users: StoredUser[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function getSession(): AuthSession | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as AuthSession;
  } catch {
    return null;
  }
}

export function setSession(session: AuthSession | null) {
  if (!session) {
    localStorage.removeItem(SESSION_KEY);
    return;
  }
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

export async function registerUser(input: {
  name: string;
  email: string;
  password: string;
}): Promise<{ ok: true } | { ok: false; error: string }> {
  const email = input.email.trim().toLowerCase();
  const name = input.name.trim();

  if (!name || !email || !input.password) {
    return { ok: false, error: 'Please fill in all fields.' };
  }
  if (input.password.length < 8) {
    return { ok: false, error: 'Password must be at least 8 characters.' };
  }

  const users = readUsers();
  if (users.some((u) => u.email === email)) {
    return { ok: false, error: 'An account with this email already exists.' };
  }

  users.push({
    email,
    name,
    passwordHash: await hashPassword(input.password),
  });
  writeUsers(users);
  return { ok: true };
}

export async function verifyLogin(
  email: string,
  password: string,
): Promise<{ ok: true; session: AuthSession } | { ok: false; error: string }> {
  const normalized = email.trim().toLowerCase();
  const user = readUsers().find((u) => u.email === normalized);
  if (!user) {
    return { ok: false, error: 'Check your email and password and try again.' };
  }

  const hash = await hashPassword(password);
  if (hash !== user.passwordHash) {
    return { ok: false, error: 'Check your email and password and try again.' };
  }

  return { ok: true, session: { email: user.email, name: user.name } };
}

/** Test helper */
export function clearAuthStorage() {
  localStorage.removeItem(USERS_KEY);
  localStorage.removeItem(SESSION_KEY);
}
