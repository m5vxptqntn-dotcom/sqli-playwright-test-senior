import { Page } from '@playwright/test';

export class GooglePage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('https://www.google.com');
  }

  async acceptCookiesIfPresent() {
    const btn = this.page.locator('button:has-text("Accept")');
    if (await btn.isVisible().catch(() => false)) {
      await btn.click();
    }
  }

  async search(term: string) {
    await this.page.fill('textarea[name="q"]', term);
    await this.page.keyboard.press('Enter');
  }

  async openWikipediaResult() {
    await this.page.click('a:has-text("Wikipedia")');
  }
}