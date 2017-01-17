describe('Contact', () => {

  beforeEach( () => {
    browser.get('/contact');
  });

  it('should have <h2>', () => {
    expect(element(by.css('contact-component h2')).isPresent()).toEqual(true);
  });

});