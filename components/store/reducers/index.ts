import { combineReducers } from "redux";
import { AuthActionType } from "../actions/actions.constants";
import { authReducer } from "./auth.reducer";

const appReducer = combineReducers({ auth: authReducer });

export const rootReducer = (state: any, action: any) => {
  if (action.type === AuthActionType.SIGN_OUT) {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
