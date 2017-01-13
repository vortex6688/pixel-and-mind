import { PamReleasePage } from './app.po';

describe('pam-release App', function() {
  let page: PamReleasePage;

  beforeEach(() => {
    page = new PamReleasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
