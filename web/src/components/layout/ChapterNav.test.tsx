import { cleanup, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, expect, it } from 'vitest';
import { ChapterNav } from './ChapterNav';

afterEach(() => cleanup());

describe('ChapterNav', () => {
  it('exposes in-page anchor links for each chapter item', () => {
    render(
      <MemoryRouter>
        <ChapterNav />
      </MemoryRouter>,
    );

    expect(screen.getByRole('link', { name: /iPhone 14 Pro/i })).toHaveAttribute('href', '#iphone-14-pro');
    expect(screen.getByRole('link', { name: /^Compare$/i })).toHaveAttribute('href', '#compare');
    expect(screen.getByRole('link', { name: /Accessories/i })).toHaveAttribute('href', '#accessories');
    expect(screen.getByRole('link', { name: /Shop iPhone/i })).toHaveAttribute('href', '#shop-iphone');
  });
});
