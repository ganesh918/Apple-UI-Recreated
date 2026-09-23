import { useId, useState } from 'react';
import './PasswordField.css';

interface PasswordFieldProps {
  id?: string;
  label: string;
  name?: string;
  value: string;
  onChange: (value: string) => void;
  autoComplete?: 'current-password' | 'new-password';
  required?: boolean;
}

function EyeOpenIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M1.667 10s2.917-5.833 8.333-5.833S18.333 10 18.333 10s-2.917 5.833-8.333 5.833S1.667 10 1.667 10Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="10" r="2.25" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function EyeClosedIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M2.5 2.5l15 15M8.15 8.15A2.25 2.25 0 0 0 10 12.25c.55 0 1.05-.2 1.45-.52M4.72 4.72C6.58 3.42 8.68 2.75 10 2.75c5.42 0 8.33 7.25 8.33 7.25a14.2 14.2 0 0 1-3.07 3.88M7.05 7.05C6.42 7.58 5.88 8.22 5.45 8.92"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PasswordField({
  id: idProp,
  label,
  name = 'password',
  value,
  onChange,
  autoComplete = 'current-password',
  required = true,
}: PasswordFieldProps) {
  const generatedId = useId();
  const id = idProp ?? generatedId;
  const [visible, setVisible] = useState(false);

  return (
    <div className="password-field">
      <label className="password-field__label" htmlFor={id}>
        {label}
      </label>
      <div className="password-field__control">
        <input
          id={id}
          name={name}
          className="password-field__input"
          type={visible ? 'text' : 'password'}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          autoComplete={autoComplete}
          required={required}
        />
        <button
          type="button"
          className="password-field__toggle"
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? 'Hide password' : 'Show password'}
          aria-pressed={visible}
        >
          {visible ? <EyeClosedIcon /> : <EyeOpenIcon />}
        </button>
      </div>
    </div>
  );
}
