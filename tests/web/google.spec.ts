import { test, expect } from '@playwright/test';
import { GooglePage } from '../../pages/GooglePage';
import { WikipediaPage } from '../../pages/WikipediaPage';

test('Google → Wikipedia automation', async ({ page }) => {
  const google = new GooglePage(page);
  const wiki = new WikipediaPage(page);

  await google.navigate();
  await google.acceptCookiesIfPresent();
  await google.search('automation');
  await google.openWikipediaResult();

  const year = await wiki.getFirstYear();
  console.log('First automation year:', year);

  expect(year).not.toBeNull();
  await wiki.screenshot();
});