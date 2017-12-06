import { PixelPage } from './app.po';

describe('pixel App', () => {
  let page: PixelPage;

  beforeEach(() => {
    page = new PixelPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
