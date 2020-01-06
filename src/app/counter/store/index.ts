import { Action, combineReducers, MetaReducer } from '@ngrx/store';
import { reducerFrom } from '@co-it/ngrx-ducks';
import { CounterState, counterReducer } from './counter';

export interface State {
  simple: CounterState;
}

export function reducers(state: State, action: Action) {
  return combineReducers<State>({
    simple: counterReducer
  })(state, action);
}

export const metaReducers: MetaReducer<State>[] = [];
