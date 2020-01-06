import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterFacade, currentCountPlus2 } from './store/counter';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  count$: Observable<number>;
  countPlus2$: Observable<number>;

  isLoading$: Observable<boolean>;

  constructor(private counter: CounterFacade) {
    this.counter.loadCount.dispatch(10);

    this.count$ = this.counter.select.currentCount;
    this.isLoading$ = this.counter.select.isLoading;

    this.countPlus2$ = this.counter.pick(currentCountPlus2, {
      offset: 2
    });
  }

  increment() {
    this.counter.increment.dispatch(1);
  }

  decrement() {
    this.counter.decrement.dispatch(1);
  }
}
