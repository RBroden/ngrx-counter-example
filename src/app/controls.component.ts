import {
    Component,
    Output,
    EventEmitter
} from '@angular/core';

@Component({
    selector: 'app-controls',
    template: `
        <button (click)="handleIncrementCounter()">Increment Counter</button>
        <button (click)="handleDecrementCounter()">Decrement Counter</button>
        <p>
            <input [(ngModel)]="setCountAmt">
            <button (click)="handleSetCounter()">Change Counter</button>
        </p>
    `
})
export class ControlsComponent {

    @Output() onIncrementCounter = new EventEmitter();
    @Output() onDecrementCounter = new EventEmitter();
    @Output() onSetCounter = new EventEmitter<number>();
    setCountAmt: number;

    handleIncrementCounter() {
        this.onIncrementCounter.emit();
    }

    handleDecrementCounter() {
        this.onDecrementCounter.emit();
    }

    handleSetCounter() {
        this.onSetCounter.emit(this.setCountAmt);
    }

}
