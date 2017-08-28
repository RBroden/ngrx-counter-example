import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './_redux/reducers';
import { Observable } from 'rxjs/Observable';

import * as counter from './_redux/counter';
import * as fromRoot from './_redux/reducers';

@Component({
  selector: 'app-root',
  template: `
  <h1>Counter JSON</h1>
  <pre>{{ counter$ | async | json  }}</pre>
  <h2>Count</h2>
  <pre>{{ count$ | async }}</pre>
  <button (click)="incrementCounter()">Increment Counter</button>
  <button (click)="decrementCounter()">Decrement Counter</button>
  <p>
    <input [(ngModel)]="setCountAmt">
    <button (click)="setCounter()">Change Counter</button>
  </p>
  `
})
export class AppComponent {

  counter$: Observable<any>;
  count$: Observable<number>;
  setCountAmt: number;

  constructor(
    private store: Store<State>
  ) {
    this.counter$ = store.select(fromRoot.selectCounter);
    this.count$ = store.select(fromRoot.selectCounterAmount);
  }

  incrementCounter(): void {
    this.store.dispatch(new counter.IncrementAction());
  }

  decrementCounter(): void {
    this.store.dispatch(new counter.DecrementAction());
  }

  setCounter(): void {
    this.store.dispatch(new counter.SetAction(this.setCountAmt));
  }

}
