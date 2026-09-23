import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { PasswordField } from './PasswordField';

afterEach(() => {
  cleanup();
});

describe('PasswordField', () => {
  it('toggles password visibility with the eye control', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(<PasswordField label="Password" value="secret123" onChange={onChange} />);

    const input = screen.getByLabelText('Password');
    expect(input).toHaveAttribute('type', 'password');

    await user.click(screen.getByRole('button', { name: 'Show password' }));
    expect(input).toHaveAttribute('type', 'text');

    await user.click(screen.getByRole('button', { name: 'Hide password' }));
    expect(input).toHaveAttribute('type', 'password');
  });
});
