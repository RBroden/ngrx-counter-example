import { Component, Input } from '@angular/core';
import * as counter from './_redux/counter';

@Component({
    selector: 'app-counter',
    template: `
        <h2>Counter</h2>
        <p>Count: {{ counter.count }}</p>
    `
})
export class CounterComponent {
    @Input() counter: counter.State;
}
