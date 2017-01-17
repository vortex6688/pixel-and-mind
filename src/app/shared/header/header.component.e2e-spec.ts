describe('Header', () => {

  beforeEach( () => {
    browser.get('/');
  });

  it('should have a title', () => {
    expect(browser.getTitle()).toEqual('Pixel And Mind');
  });

  it('should have <nav>', () => {
    expect(element(by.css('header-component nav')).isPresent()).toEqual(true);
  });

  it('should have correct nav text for Home', () => {
    expect(element(by.css('header-component nav a:first-child')).getText()).toEqual('Home');
  });

});