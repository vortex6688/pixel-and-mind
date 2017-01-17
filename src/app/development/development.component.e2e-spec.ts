describe('Development', () => {

  beforeEach( () => {
    browser.get('/development');
  });

  it('should have <h2>', () => {
    expect(element(by.css('development-component h2')).isPresent()).toEqual(true);
  });

});