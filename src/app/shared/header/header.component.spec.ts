import { Component } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

export function main() {
   describe('Header component', () => {
    // Setting module for testing
    // Disable old forms

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent]
      });
    });

    it('should work',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            let headerDOMEl = fixture.debugElement.children[0].nativeElement;

              // Should have title, not empty
	          expect(headerDOMEl.querySelectorAll('h1')[0].textContent).toEqual('Pixel And Mind'); 
          });
        }));
    });
}

@Component({
  selector: 'test-cmp',
  template: '<header-component></header-component>'
})
class TestComponent {}
