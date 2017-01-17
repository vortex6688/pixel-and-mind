import { Component } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';

import { SharedModule } from '../shared.module';

export function main() {
   describe('footer component', () => {
    // Setting module for testing
    // Disable old forms

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [SharedModule]
      });
    });

    it('should work',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            let footerDOMEl = fixture.debugElement.children[0].nativeElement;

              // Should have navigation and at least one link
	          expect(footerDOMEl.querySelectorAll('nav > a').length > 0).toEqual(true);
              // Footer nav should have at lest 1 link with at least 1 letter in it
            expect(footerDOMEl.querySelectorAll('nav > a')[0].textContent.length > 0).toEqual(true);
          });
        }));
    });
}

@Component({
  selector: 'test-cmp',
  template: '<footer-component></footer-component>'
})
class TestComponent {}