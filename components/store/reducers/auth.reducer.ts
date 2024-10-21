import { Reducer } from "@reduxjs/toolkit";
import { produce } from "immer";
import { localStorageService } from "../../services/LocalStorageService";
import { AuthActionType } from "../actions/actions.constants";
import { EntityState } from "../base/EntityState";
import { User } from "@/components/models/entities/User";

export interface AuthState extends EntityState {
  userId?: number;
  loading?: boolean;
  error?: string;
  loaded?: boolean;
  loggedInUser?: User;
}

const initialState: AuthState = {
  entities: {},
};

export const authReducer: Reducer<AuthState> = (
  state: AuthState = initialState,
  action: any
) =>
  produce(state, (draft: AuthState) => {
    switch (action.type) {
      case AuthActionType.SIGNIN:
      case AuthActionType.FETCH_ME:
      case AuthActionType.SIGN_UP: {
        draft.loading = true;
        break;
      }
      case AuthActionType.SIGNIN_COMPLETED:
      case AuthActionType.FETCH_ME_COMPLETED:
      case AuthActionType.SIGN_UP_COMPLETED: {
        draft.userId = action.payload.id;
        draft.loggedInUser = action.payload;
        draft.loading = false;
        draft.error = undefined;
        draft.loaded = true;
        break;
      }
      case AuthActionType.SIGN_IN_ERROR:
      case AuthActionType.FETCH_ME_ERROR:
      case AuthActionType.SIGN_UP_ERROR: {
        draft.loading = false;
        draft.error = action.payload;
        break;
      }

      case AuthActionType.FORGOT_PASSWORD: {
        draft.loadingOne = true;
        break;
      }
      case AuthActionType.FORGOT_PASSWORD_COMPLETED: {
        draft.loadingOne = false;
        break;
      }
      case AuthActionType.FORGOT_PASSWORD_ERROR: {
        draft.loadingOne = false;
        draft.error = action.payload;
        break;
      }
      case AuthActionType.RESET_PASSWORD: {
        draft.loadingOne = true;
        break;
      }
      case AuthActionType.RESET_PASSWORD_COMPLETED: {
        draft.loadingOne = false;
        break;
      }
      case AuthActionType.RESET_PASSWORD_ERROR: {
        draft.loadingOne = false;
        draft.error = action.payload;
        break;
      }
      case AuthActionType.CHANGE_PASSWORD: {
        draft.loadingOne = true;
        break;
      }
      case AuthActionType.CHANGE_PASSWORD_COMPLETED: {
        draft.loadingOne = false;
        break;
      }
      case AuthActionType.CHANGE_PASSWORD_ERROR: {
        draft.loadingOne = false;
        break;
      }
    }
  });
