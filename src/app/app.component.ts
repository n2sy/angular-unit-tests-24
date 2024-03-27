import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'UNIT-TESTS';

  compute(x) {
    if (x < 10) return 0;
    else return 1;
  }
}
