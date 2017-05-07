/* @flow */

import * as I from 'immutable';

/**
 * Define an immutable record intended for holding reducer state
 * @param  spec - the keys and their default values
 * @return a state record factory function
 */
export function defineRecord<T: Object>(
  name: string,
  spec: T
): (init: $Shape<T>) => Record<T> {
    return I.Record(spec, name);
}

export type Record<T: Object> = RecordMethods<T> & T;

declare class RecordMethods<T: Object> {
  get<A>(key: $Keys<T>): A;
  set<A>(key: $Keys<T>, value: A): Record<T>;
  update<A>(key: $Keys<T>, updater: (value: A) => A): Record<T>;
  updateIn<A>(path: Iterable<any>, notSetOrUpdater: A | (value: A) => A, updater?: (value: A) => A): Record<T>;
  setIn<A>(path: Iterable<any>, value: A): Record<T>;
  deleteIn<A>(path: Iterable<any>): Record<T>;
  merge(values: $Shape<T>): Record<T>;
  inspect(): string;
  toObject(): T;
  // add more as needed
}
