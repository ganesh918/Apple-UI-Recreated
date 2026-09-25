import { expect, test } from '@playwright/test';

async function signUpAndLandOnHome(page: import('@playwright/test').Page) {
  const email = `e2e-${Date.now()}@example.com`;
  await page.goto('/signup');
  await page.getByLabel('Full name').fill('E2E User');
  await page.getByLabel('Email').fill(email);
  await page.getByLabel('Password', { exact: true }).fill('password123');
  await page.getByLabel('Confirm password').fill('password123');
  await page.getByRole('button', { name: /create account/i }).click();
  await expect(page.getByText(/Two great sizes/i)).toBeVisible({ timeout: 15_000 });
}

test.describe('Mobile landing (/mobile)', () => {
  test('public page shows global nav and chapter nav without login', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'mobile-chrome', 'Mobile viewport');
    await page.goto('/mobile');
    await expect(page.getByRole('navigation', { name: 'Global' })).toBeVisible();
    await expect(page.getByRole('link', { name: /^Compare$/i })).toBeVisible();
    await expect(page.getByText(/Two great sizes/i)).toBeVisible();
  });

  test('desktop viewport shows mobile layout (hamburger, not full nav row)', async ({
    page,
  }, testInfo) => {
    test.skip(testInfo.project.name !== 'desktop-chrome', 'Desktop viewport');
    await page.goto('/mobile');
    await expect(page.getByRole('button', { name: 'Menu', exact: true })).toBeVisible();
    await expect(page.locator('.global-nav__list')).toBeHidden();
  });

  test('hamburger menu lists Apple global nav items', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'mobile-chrome', 'Mobile viewport');
    await page.goto('/mobile');
    await page.getByRole('button', { name: 'Menu' }).click();
    const dialog = page.getByRole('dialog', { name: 'Menu' });
    await expect(dialog).toBeVisible();
    await expect(dialog.getByRole('link', { name: 'Store' })).toBeVisible();
    await expect(dialog.getByRole('link', { name: 'Mac' })).toBeVisible();
    await expect(dialog.getByRole('link', { name: 'iPhone' })).toBeVisible();
    await expect(dialog.getByRole('link', { name: 'Support' })).toBeVisible();
    await dialog.getByRole('button', { name: 'Close' }).click();
    await expect(dialog).toBeHidden();
  });
});

test.describe('Authentication', () => {
  test('signup flow reaches the iPhone landing page', async ({ page }) => {
    await signUpAndLandOnHome(page);
    await expect(page.getByRole('navigation', { name: 'Global' })).toBeVisible();
  });

  test('apple menu sign out returns to login', async ({ page }, testInfo) => {
    await signUpAndLandOnHome(page);
    if (testInfo.project.name === 'desktop-chrome') {
      await page.getByRole('button', { name: /apple account menu/i }).click();
      await page.getByRole('menuitem', { name: /sign out/i }).click();
    } else {
      await page.getByRole('button', { name: 'Menu', exact: true }).click();
      await page.getByRole('button', { name: /sign out/i }).click();
    }
    await expect(page.getByRole('heading', { name: /sign in/i })).toBeVisible();
  });
});

test.describe('Responsive layout', () => {
  test('desktop home uses full web global nav', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'desktop-chrome', 'Desktop viewport');
    await signUpAndLandOnHome(page);
    await expect(
      page.getByRole('navigation', { name: 'Global' }).getByRole('link', { name: 'Store' }),
    ).toBeVisible();
    await expect(page.getByRole('button', { name: 'Menu', exact: true })).toBeHidden();
  });

  test('no horizontal document overflow on load', async ({ page }) => {
    await signUpAndLandOnHome(page);
    const hasOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth + 2,
    );
    expect(hasOverflow).toBe(false);
  });

  test('hero headline is visible and within viewport width', async ({ page }) => {
    await signUpAndLandOnHome(page);
    const headline = page.getByRole('heading', { name: /Two great sizes/i });
    await expect(headline).toBeVisible();
    const box = await headline.boundingBox();
    expect(box).not.toBeNull();
    const viewport = page.viewportSize();
    expect(box!.width).toBeLessThanOrEqual((viewport?.width ?? 390) - 16);
  });

  test('compare section is reachable via chapter nav', async ({ page }) => {
    await signUpAndLandOnHome(page);
    await page.getByRole('link', { name: /^Compare$/i }).click();
    await expect(page.getByRole('heading', { name: /Which iPhone is right for you/i })).toBeInViewport();
  });

  test('guided tour title is not clipped on mobile', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'mobile-chrome', 'Mobile-only check');
    await signUpAndLandOnHome(page);
    await page.getByText(/A Guided Tour of/i).scrollIntoViewIfNeeded();
    const title = page.getByText(/iPhone 14 Pro/i).first();
    await expect(title).toBeVisible();
    const visible = await title.evaluate((el) => {
      const rect = el.getBoundingClientRect();
      return rect.width > 0 && rect.height > 8 && rect.bottom <= window.innerHeight + 2;
    });
    expect(visible).toBe(true);
  });
});
