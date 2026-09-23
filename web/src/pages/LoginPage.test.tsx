import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, expect, it } from 'vitest';
import { AuthProvider } from '../auth/AuthContext';
import { clearAuthStorage } from '../auth/authStorage';
import { LoginPage } from './LoginPage';

function renderLogin() {
  return render(
    <MemoryRouter>
      <AuthProvider>
        <LoginPage />
      </AuthProvider>
    </MemoryRouter>,
  );
}

afterEach(() => {
  cleanup();
  clearAuthStorage();
});

describe('LoginPage', () => {
  it('shows validation error for wrong credentials', async () => {
    const user = userEvent.setup();
    renderLogin();

    await user.type(screen.getByLabelText('Email'), 'nobody@example.com');
    await user.type(screen.getByLabelText('Password'), 'wrongpass1');
    await user.click(screen.getByRole('button', { name: /sign in/i }));

    expect(await screen.findByRole('alert')).toHaveTextContent(/check your email/i);
  });

  it('links to signup', () => {
    renderLogin();
    expect(screen.getByRole('link', { name: /create yours now/i })).toHaveAttribute('href', '/signup');
  });
});
