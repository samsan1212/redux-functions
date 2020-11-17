import { Action, Reducer, ActionCreator, AnyAction } from "redux";

/* Types */
export interface AppAction<T = unknown> extends Action<string> {
    payload: T;
}

export interface AppActionCreator<T> {
    (): Action<string>;
    (payload: T): AppAction<T>;
    test(a: AnyAction): a is AppAction<T>;
    toString(): string;
}

export interface ActionTypeCreator {
    (actionName: string): string
}
/* END: Types */

/* Functions */
export function toActionCreator<T>(type: string): AppActionCreator<T>;
export function toReducer<T>(type: string, defaultValue: T): Reducer<T, AppAction<T>>
export function toType(prefix: string): ActionTypeCreator
/* END: Functions */