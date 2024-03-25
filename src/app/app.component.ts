import { Component } from '@angular/core';
import { StandComponent } from './stand/stand.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PLB-TESTS';

  compute(x) {
    if(x<10)
      return 0
    else 
      return 1;
  }
}
