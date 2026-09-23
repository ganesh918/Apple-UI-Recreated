import { cleanup, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { AuthProvider } from './auth/AuthContext';
import { setSession } from './auth/authStorage';
import App from './App';

function renderApp(initialPath = '/') {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </MemoryRouter>,
  );
}

beforeEach(() => {
  setSession({ email: 'demo@icloud.com', name: 'Demo User' });
});

afterEach(() => {
  cleanup();
  localStorage.clear();
});

describe('App', () => {
  it('renders main iPhone hero content when authenticated', () => {
    renderApp('/');
    expect(screen.getByText(/Two great sizes/i)).toBeInTheDocument();
    expect(screen.getByText(/Pro\. Beyond\./i)).toBeInTheDocument();
    expect(screen.getByText(/Love the power/i)).toBeInTheDocument();
  });

  it('renders global navigation when authenticated', () => {
    renderApp('/');
    expect(screen.getByRole('navigation', { name: 'Global' })).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: 'iPhone' })).toBeInTheDocument();
  });

  it('renders compare section heading when authenticated', () => {
    renderApp('/');
    expect(screen.getByRole('heading', { name: /Which iPhone is right for you/i })).toBeInTheDocument();
  });

  it('renders footer when authenticated', () => {
    renderApp('/');
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    expect(screen.getByText(/Copyright © 2023 Apple Inc/i)).toBeInTheDocument();
  });

  it('redirects to login when not authenticated', () => {
    setSession(null);
    renderApp('/');
    expect(screen.getByRole('heading', { name: /Sign in/i })).toBeInTheDocument();
  });
});
