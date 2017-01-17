describe('Footer', () => {

  beforeEach( () => {
    browser.get('/');
  });

  it('should have <nav>', () => {
    expect(element(by.css('footer-component nav')).isPresent()).toEqual(true);
  });

  it('should have correct nav text for Home', () => {
    expect(element(by.css('footer-component nav a:first-child')).getText()).toEqual('Home');
  });

});