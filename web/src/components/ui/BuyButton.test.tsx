import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { BuyButton } from './BuyButton';

afterEach(() => {
  cleanup();
});

describe('BuyButton', () => {
  it('renders default Buy label', () => {
    render(<BuyButton />);
    expect(screen.getByRole('button', { name: 'Buy' })).toBeInTheDocument();
  });

  it('renders custom label', () => {
    render(<BuyButton label="Shop iPhone" />);
    expect(screen.getByRole('button', { name: 'Shop iPhone' })).toBeInTheDocument();
  });

  it('calls onClick when pressed', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<BuyButton onClick={onClick} />);
    await user.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it('applies small variant class', () => {
    render(<BuyButton variant="small" />);
    expect(screen.getByRole('button')).toHaveClass('buy-button--small');
  });
});
