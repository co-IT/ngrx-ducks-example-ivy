import { Injectable } from '@angular/core';
import {
  bindSelectors,
  connect,
  createDuck,
  dispatch,
  getActions,
  getReducer,
  usePick
} from '@co-it/ngrx-ducks';
import { Store } from '@ngrx/store';
import * as selectors from './counter.selectors';
import { CounterState } from './counter.state';

@Injectable({
  providedIn: 'root',
  useFactory: (store: Store<unknown>) => connect(CounterFacade, store),
  deps: [Store]
})
export class CounterFacade {
  pick = usePick();
  select = bindSelectors({
    currentCount: selectors.currentCount,
    isLoading: selectors.isLoading
  });

  /**
   *
   * You can also create aliases or build selector groups
   *
   * progress = bindSelectors({ isLoading: selectors.isLoading });
   * counter = bindSelectors({ count: selectors.currentCount });
   *
   */

  readonly loadCount = createDuck('[Counter] Load Count', dispatch<number>());

  increment = createDuck(
    '[Counter] Increment value',
    (state: CounterState, payload: number) => {
      return {
        ...state,
        count: state.count + payload
      };
    }
  );

  decrement = createDuck(
    '[Counter] Decrement value',
    (state: CounterState, payload: number) => {
      return {
        ...state,
        count: state.count - payload
      };
    }
  );

  override = createDuck(
    '[Counter] Set value',
    (state: CounterState, payload: number) => {
      return {
        ...state,
        count: payload,
        isLoading: false
      };
    }
  );
}

const initialState = {
  count: 0,
  isLoading: true
};

export const counterReducer = getReducer(initialState, CounterFacade);
export const counterActions = getActions(CounterFacade);
