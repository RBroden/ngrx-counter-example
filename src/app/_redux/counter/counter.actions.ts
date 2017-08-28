import { Action } from '@ngrx/store';
import { type } from '../util';

const ACTION_PREFIX = '[Counter] ';

export const ActionTypes = {
    INCREMENT: type(ACTION_PREFIX + 'increment'),
    DECREMENT: type(ACTION_PREFIX + 'decrement'),
    SET: type(ACTION_PREFIX + 'set')
};

export class IncrementAction implements Action {
    public type = ActionTypes.INCREMENT;
    constructor(public payload?: void) { }
}

export class DecrementAction implements Action {
    public type = ActionTypes.DECREMENT;
    constructor(public payload?: void) { }
}

export class SetAction implements Action {
    public type = ActionTypes.SET;
    constructor(public payload: number) { }
}

export type Actions =
    IncrementAction
    | DecrementAction
    | SetAction;
