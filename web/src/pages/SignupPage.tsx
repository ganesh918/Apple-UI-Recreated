import { useState, type FormEvent } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import { AuthLayout } from '../components/auth/AuthLayout';
import { PasswordField } from '../components/auth/PasswordField';
import './AuthPages.css';

export function SignupPage() {
  const { signup, isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    const message = await signup(name, email, password);
    if (message) {
      setError(message);
      return;
    }
    navigate('/', { replace: true });
  }

  return (
    <AuthLayout
      title="Create your account"
      subtitle="One Apple Account is all you need to access our services."
      footer={
        <>
          Already have an account? <Link to="/login">Sign in</Link>
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
          <label className="auth-field__label" htmlFor="signup-name">
            Full name
          </label>
          <input
            id="signup-name"
            className="auth-field__input"
            type="text"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="auth-field">
          <label className="auth-field__label" htmlFor="signup-email">
            Email
          </label>
          <input
            id="signup-email"
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
          autoComplete="new-password"
        />
        <p className="auth-form__hint">Use at least 8 characters.</p>

        <PasswordField
          label="Confirm password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={setConfirmPassword}
          autoComplete="new-password"
        />

        <button type="submit" className="auth-form__submit" disabled={isLoading}>
          {isLoading ? 'Creating account…' : 'Create account'}
        </button>
      </form>
    </AuthLayout>
  );
}
