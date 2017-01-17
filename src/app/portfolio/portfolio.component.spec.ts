import { Component } from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';

import { PortfolioModule } from './portfolio.module';

export function main() {
   describe('Portfolio component', () => {
    // Setting module for testing
    // Disable old forms

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [PortfolioModule]
      });
    });

    it('should work',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            let aboutDOMEl = fixture.debugElement.children[0].nativeElement;

	          expect(aboutDOMEl.querySelectorAll('h2')[0].textContent).toEqual('This is a Portfolio Page');
          });
        }));
    });
}

@Component({
  selector: 'test-cmp',
  template: '<portfolio-component></portfolio-component>'
})
class TestComponent {}