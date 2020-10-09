import type { Reducer, Action } from "redux";
import type { AppActionCreatorWithoutPayload, AppActionCreator, ActionTypeCreator } from "./type";

export interface AppAction<T = unknown> extends Action<string> {
    payload: T;
}

export function toReducer<T>(type: string, defaultValue: T): Reducer<T, AppAction<T>> {
    return (state = defaultValue, action) => {
        if (action && action.type === type) {
            return action.payload;
        }
        return state;
    };
}

export function toActionCreator<T = undefined>(type: string, noPayload: true): AppActionCreatorWithoutPayload
export function toActionCreator<T>(type: string, noPayload?: false): AppActionCreator<T>
export function toActionCreator<T>(type: string, noPayload = false) {
    if (noPayload) {
        return () => ({ type })
    }
    return (payload: T) => ({ type, payload });
}

export function toType(prefix: string): ActionTypeCreator {
    return (actionName: string) => `${prefix}::${actionName}`
};