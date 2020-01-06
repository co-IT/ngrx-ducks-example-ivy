import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { delay, map } from 'rxjs/operators';
import { counterActions } from './counter.facade';

@Injectable()
export class CounterEffects {
  setCounter = createEffect(() => this.actions$.pipe(
    ofType(counterActions.loadCount),
    delay(2000),
    map(({ payload }) => counterActions.override(payload))
  ));

  constructor(private actions$: Actions) {}
}
