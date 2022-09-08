import { Action, Reducer, ActionCreator, AnyAction } from "redux";

/* Types */
export interface AppAction<T = unknown, Type = any> extends Action<Type> {
  payload: T;
}

export interface AppActionCreator<T = any, Type = any> {
  type: string;
  (): Action<string>;
  (payload: T): AppAction<T, Type>;
  test(a: AnyAction): a is AppAction<T, Type>;
  toString(): string;
}

export interface ActionTypeCreator {
  (actionName: string): string;
}
/* END: Types */

/* Functions */
export function toActionCreator<T>(type: string): AppActionCreator<T>;
export function toReducer<T>(type: string, defaultValue: T): Reducer<T, AppAction<T>>;
export function toType(prefix: string): ActionTypeCreator;
/* END: Functions */
