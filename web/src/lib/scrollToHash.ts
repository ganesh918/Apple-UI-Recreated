/** Scroll to an in-page anchor, accounting for the sticky global nav. */
export function scrollToHash(hash: string, smooth = true): boolean {
  const id = hash.replace(/^#/, '').trim();
  if (!id) return false;

  const target = document.getElementById(id);
  if (!target) return false;

  const rootStyles = getComputedStyle(document.documentElement);
  const offset = parseFloat(rootStyles.getPropertyValue('--scroll-offset-top')) || 56;

  const top = target.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({
    top: Math.max(0, top),
    behavior: smooth ? 'smooth' : 'auto',
  });

  if (window.history.replaceState) {
    window.history.replaceState(null, '', `#${id}`);
  } else {
    window.location.hash = id;
  }

  return true;
}
