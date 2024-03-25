import { Component } from '@angular/core';
import { CountService } from '../count.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  data;

  constructor(public countSer: CountService) {}

  ngOnInit() {
    this.countSer
      .getData()
      .then((response) => {
        this.data = response;
      })
      .catch((err) => {
        this.data = err.toString();
      });
  }
}
