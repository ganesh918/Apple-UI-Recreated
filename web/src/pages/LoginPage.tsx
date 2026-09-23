import { useState, type FormEvent } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import { AuthLayout } from '../components/auth/AuthLayout';
import { PasswordField } from '../components/auth/PasswordField';
import './AuthPages.css';

export function LoginPage() {
  const { login, isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: string } | null)?.from ?? '/';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  if (isAuthenticated) {
    return <Navigate to={from} replace />;
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError(null);
    const message = await login(email, password);
    if (message) {
      setError(message);
      return;
    }
    navigate(from, { replace: true });
  }

  return (
    <AuthLayout
      title="Sign in"
      subtitle="Use your Apple Account to continue to iPhone."
      footer={
        <>
          Don&apos;t have an account? <Link to="/signup">Create yours now</Link>
        </>
      }
    >
      <form className="auth-form" onSubmit={handleSubmit} noValidate>
        {error ? (
          <p className="auth-form__error" role="alert">
            {error}
          </p>
        ) : null}

        <div className="auth-field">
          <label className="auth-field__label" htmlFor="login-email">
            Email
          </label>
          <input
            id="login-email"
            className="auth-field__input"
            type="email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <PasswordField
          label="Password"
          name="password"
          value={password}
          onChange={setPassword}
          autoComplete="current-password"
        />

        <button type="submit" className="auth-form__submit" disabled={isLoading}>
          {isLoading ? 'Signing in…' : 'Sign in'}
        </button>
      </form>
    </AuthLayout>
  );
}
