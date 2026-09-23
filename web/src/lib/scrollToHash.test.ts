import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { scrollToHash } from './scrollToHash';

describe('scrollToHash', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="compare" style="height:1px"></div>';
    document.documentElement.style.setProperty('--scroll-offset-top', '56');
    vi.spyOn(window, 'scrollTo').mockImplementation(() => undefined);
    window.history.replaceState(null, '', '/');
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('returns false for empty hash', () => {
    expect(scrollToHash('', false)).toBe(false);
  });

  it('returns false when target is missing', () => {
    expect(scrollToHash('#missing', false)).toBe(false);
  });

  it('scrolls to target with nav offset', () => {
    const el = document.getElementById('compare')!;
    vi.spyOn(el, 'getBoundingClientRect').mockReturnValue({
      top: 200,
      left: 0,
      right: 0,
      bottom: 0,
      width: 0,
      height: 0,
      x: 0,
      y: 0,
      toJSON: () => ({}),
    });
    Object.defineProperty(window, 'scrollY', { value: 100, writable: true });

    expect(scrollToHash('#compare', false)).toBe(true);
    expect(window.scrollTo).toHaveBeenCalledWith(
      expect.objectContaining({ top: 244, behavior: 'auto' }),
    );
    expect(window.location.hash).toBe('#compare');
  });
});
