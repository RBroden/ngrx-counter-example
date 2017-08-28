import {
    ActionReducerMap,
    createSelector,
    createFeatureSelector,
    ActionReducer,
    MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as R from 'ramda';

import * as fromCounter from './counter';


// state
export interface State {
    counter: fromCounter.State;
}

export const reducers: ActionReducerMap<State> = {
    counter: fromCounter.reducer,
};

// logger
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
    return function (state: State, action: any): State {
        console.log('state', state);
        console.log('action', action);

        return reducer(state, action);
    };
}

// meta reducers
export const metaReducers: MetaReducer<State>[] = !environment.production
    ? [logger]
    : [];

// Selectors
// Counter
// export const selectCounter = R.prop('counter');
export const selectCounter = createFeatureSelector<fromCounter.State>('counter');
export const selectCounterAmount = createSelector(selectCounter, fromCounter.getCount);
