import { Component } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';

import { HomeModule } from './home.module';

export function main() {
   describe('home component', () => {
    // Setting module for testing
    // Disable old forms

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [HomeModule]
      });
    });

    it('should work',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            let contentDOMEl = fixture.debugElement.children[0].nativeElement;

              // Block with a class .content should exist
            expect(contentDOMEl.querySelectorAll('div.content').length > 0).toEqual(true);
              // Content template should have greeting block with the H2 heading
            expect(contentDOMEl.querySelectorAll('div.greet > h2').length > 0).toEqual(true);
             // Greeting block Heading should be not empty (to have at least one letter)
            expect(contentDOMEl.querySelectorAll('div.greet > h2')[0].textContent.length > 0).toEqual(true);
          });
        }));
    });
}

@Component({
  selector: 'test-cmp',
  template: '<home-component></home-component>'
})
class TestComponent {}