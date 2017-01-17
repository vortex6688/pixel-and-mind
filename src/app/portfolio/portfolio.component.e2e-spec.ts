describe('Portfolio', () => {

  beforeEach( () => {
    browser.get('/portfolio');
  });

  it('should have <h2>', () => {
    expect(element(by.css('portfolio-component h2')).isPresent()).toEqual(true);
  });

});