import type { Action, AnyAction } from "redux";
import type { AppAction, AppActionCreator } from "./type";

function toActionCreator<T = any, Type = any>(type: string): AppActionCreator<T, Type> {
  function actionCreator(): Action<string>;
  function actionCreator(payload: T): AppAction<T, Type>;
  function actionCreator(payload?: T) {
    if (payload !== undefined) {
      return { type, payload } as AppAction<T, Type>;
    }
    return { type } as Action<string>;
  }
  actionCreator.test = (action: AnyAction): action is AppAction<T, Type> => action.type === type;
  actionCreator.toString = () => type;
  actionCreator.type = type;
  return actionCreator;
}

export default toActionCreator;
