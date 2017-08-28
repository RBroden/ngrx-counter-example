import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './_redux/reducers';
import { Observable } from 'rxjs/Observable';

import * as counter from './_redux/counter';
import * as fromRoot from './_redux/reducers';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  template: `
  <app-counter
    [counter]="counter$ | async">
  </app-counter>
  <app-controls
    (onIncrementCounter)="handleCounterIncrement($event)"
    (onDecrementCounter)="handleCounterDecrement($event)"
    (onSetCounter)="handleCounterSet($event)">
  </app-controls>
  `
})
export class AppComponent {

  counter$: Observable<counter.State>;

  constructor(
    private store: Store<State>
  ) {
    this.counter$ = store.select(fromRoot.selectCounter);
  }

  handleCounterIncrement(): void {
    this.store.dispatch(new counter.IncrementAction());
  }

  handleCounterDecrement(): void {
    this.store.dispatch(new counter.DecrementAction());
  }

  handleCounterSet(value: number): void {
    this.store.dispatch(new counter.SetAction(value));
  }

}
