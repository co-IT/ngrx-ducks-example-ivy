import {
  bindSelectors,
  createDuck,
  dispatch,
  getActions,
  getReducer,
  StoreFacade,
  usePick,
} from '@ngrx-ducks/core';
import * as selectors from './counter.selectors';
import { CounterState } from './counter.state';

@StoreFacade()
export class CounterFacade {
  pick = usePick();
  select = bindSelectors(selectors);

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
        count: state.count + payload,
      };
    }
  );

  decrement = createDuck(
    '[Counter] Decrement value',
    (state: CounterState, payload: number) => {
      return {
        ...state,
        count: state.count - payload,
      };
    }
  );

  override = createDuck(
    '[Counter] Set value',
    (state: CounterState, payload: number) => {
      return {
        ...state,
        count: payload,
        isLoading: false,
      };
    }
  );

  math = {
    square: createDuck('[Counter] Square', (state) => {
      console.log('adasdsa');
      return state;
    }),
  };
}

const initialState = {
  count: 0,
  isLoading: true,
};

export const counterReducer = getReducer(initialState, CounterFacade);
export const counterActions = getActions(CounterFacade);
