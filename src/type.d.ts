import { Action, Reducer } from "redux";

export interface AppAction<T = unknown> extends Action<string> {
    payload: T;
}

export interface AppActionCreator<T> {
    (payload: T): AppAction<T>
}

export interface AppActionCreatorWithoutPayload {
    (): Action<string>
}

export interface ActionTypeCreator {
    (actionName: string): string
}

export function toActionCreator<T = undefined>(type: string, noPayload: true): AppActionCreatorWithoutPayload
export function toActionCreator<T>(type: string, noPayload?: false): AppActionCreator<T>

export function toReducer<T>(type: string, defaultValue: T): Reducer<T, AppAction<T>>

export function toType(prefix: string): ActionTypeCreator