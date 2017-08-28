import { createSelector, Action } from '@ngrx/store';
import * as R from 'ramda';

import * as counter from './counter.actions';

export interface State {
    count: number;
};

export const initialState: State = {
    count: 0
};

export function reducer(state = initialState, action: counter.Actions): State {
    switch (action.type) {
        case counter.ActionTypes.INCREMENT: {
            return {
                ...state,
                count: state.count + 1
            };
        }

        case counter.ActionTypes.DECREMENT: {
            return {
                ...state,
                count: state.count - 1
            };
        }

        case counter.ActionTypes.SET: {
            if (!!action.payload || action.payload === 0) {
                return {
                    ...state,
                    count: action.payload
                };
            } else {
                return state;
            }
        }

        default: {
            return state;
        }
    }
};

// Selectors
export const getCount = (state: State) => state.count;
