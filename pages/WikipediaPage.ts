import { Page } from '@playwright/test';

export class WikipediaPage {
  constructor(private page: Page) {}

  async getFirstYear(): Promise<string | null> {
    const content = await this.page.textContent('body');
    const match = content?.match(/\b(17|18|19|20)\d{2}\b/);
    return match ? match[0] : null;
  }

  async screenshot(path: string = 'wikipedia.png') {
    await this.page.screenshot({ path, fullPage: true });
  }
}