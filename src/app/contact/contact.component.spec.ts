import { Component } from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';

import { ContactModule } from './contact.module';

export function main() {
   describe('Contact component', () => {
    // Setting module for testing
    // Disable old forms

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [ContactModule]
      });
    });

    it('should work',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            let aboutDOMEl = fixture.debugElement.children[0].nativeElement;

	          expect(aboutDOMEl.querySelectorAll('h2')[0].textContent).toEqual('This is a Contact Page');
          });
        }));
    });
}

@Component({
  selector: 'test-cmp',
  template: '<contact-component></contact-component>'
})
class TestComponent {}