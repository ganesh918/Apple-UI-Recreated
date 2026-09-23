import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import App from './App';

afterEach(() => {
  cleanup();
});

describe('App', () => {
  it('renders main iPhone hero content', () => {
    render(<App />);
    expect(screen.getByText(/Two great sizes/i)).toBeInTheDocument();
    expect(screen.getByText(/Pro\. Beyond\./i)).toBeInTheDocument();
    expect(screen.getByText(/Love the power/i)).toBeInTheDocument();
  });

  it('renders global navigation', () => {
    render(<App />);
    expect(screen.getByRole('navigation', { name: 'Global' })).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: 'iPhone' })).toBeInTheDocument();
  });

  it('renders compare section heading', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /Which iPhone is right for you/i })).toBeInTheDocument();
  });

  it('renders footer', () => {
    render(<App />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    expect(screen.getByText(/Copyright © 2023 Apple Inc/i)).toBeInTheDocument();
  });
});
