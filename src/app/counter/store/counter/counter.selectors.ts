import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '..';

const visitCounter = createFeatureSelector<State>('counter');

export const currentCount = createSelector(
  visitCounter,
  counter => counter.simple.count
);

export const currentCountPlus2 = createSelector(
  visitCounter,
  (counter, props: { offset: number }) => counter.simple.count + props.offset
);

export const isLoading = createSelector(
  visitCounter,
  counter => counter.simple.isLoading
);
