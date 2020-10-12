import type { Action, AnyAction } from "redux";
import type { AppAction, AppActionCreator } from "./type";

function toActionCreator<T>(type: string): AppActionCreator<T> {
    function actionCreator(): Action<string>
    function actionCreator(payload: T): AppAction<T>
    function actionCreator(payload?: T) {
        if (payload !== undefined) {
            return { type, payload }
        }
        return { type };
    }
    actionCreator.is = (action: AnyAction) => action.type === type;
    actionCreator.toString = () => type;
    return actionCreator
}

export default toActionCreator;
