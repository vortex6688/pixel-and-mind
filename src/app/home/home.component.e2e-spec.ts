describe('Content', () => {

  beforeEach( () => {
    browser.get('/');
  });

  it('should have <h2>', () => {
    expect(element(by.css('home-component h2')).isPresent()).toEqual(true);
  });

  it('should have correct h2 text for greeting', () => {
    expect(element(by.css('home-component h2')).getText()).toEqual("Welcome to Pixel And Mind's website!");
  });

});