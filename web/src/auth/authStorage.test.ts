import { afterEach, describe, expect, it } from 'vitest';
import {
  clearAuthStorage,
  getSession,
  hashPassword,
  registerUser,
  setSession,
  verifyLogin,
} from './authStorage';

afterEach(() => {
  clearAuthStorage();
});

describe('authStorage', () => {
  it('hashes passwords consistently', async () => {
    const a = await hashPassword('test-password-123');
    const b = await hashPassword('test-password-123');
    expect(a).toBe(b);
    expect(a).not.toBe(await hashPassword('other'));
  });

  it('registers and verifies a user', async () => {
    const result = await registerUser({
      name: 'Test User',
      email: 'test@example.com',
      password: 'password123',
    });
    expect(result.ok).toBe(true);

    const login = await verifyLogin('test@example.com', 'password123');
    expect(login.ok).toBe(true);
    if (login.ok) {
      expect(login.session.name).toBe('Test User');
    }
  });

  it('rejects duplicate email', async () => {
    await registerUser({
      name: 'A',
      email: 'dup@example.com',
      password: 'password123',
    });
    const second = await registerUser({
      name: 'B',
      email: 'dup@example.com',
      password: 'password123',
    });
    expect(second.ok).toBe(false);
  });

  it('persists session in localStorage', () => {
    setSession({ email: 'a@b.com', name: 'A B' });
    expect(getSession()).toEqual({ email: 'a@b.com', name: 'A B' });
    setSession(null);
    expect(getSession()).toBeNull();
  });
});
