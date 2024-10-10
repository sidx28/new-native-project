import { User } from "../../models/entities/User";
import { AuthActionType } from "./actions.constants";

// TODO: MOVE TO SPECIFIC TYPE FILE
export interface AuthSigninActionPayloadType {
  email: string;
  password: string;
  // module: string | null;
}

export interface AuthSignupActionPayloadType {
  email: string;
  password: string;
  username: string;
}

export interface UserEditPayloadType {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  organization: string;
  profile_picture_url: string;
}

export const authSignupAction = (payload: AuthSignupActionPayloadType) => ({
  type: AuthActionType.SIGN_UP,
  payload,
});

export const authSignupCompletedAction = (user: User) => ({
  type: AuthActionType.SIGN_UP_COMPLETED,
  payload: user,
});

export const authSignupErrorAction = (message: string) => ({
  type: AuthActionType.SIGN_UP_ERROR,
  payload: message,
});

export const authSigninAction = (payload: AuthSigninActionPayloadType) => ({
  type: AuthActionType.SIGNIN,
  payload,
});

export const authSigninCompletedAction = (user: User) => ({
  type: AuthActionType.SIGNIN_COMPLETED,
  payload: user,
});

export const authSigninErrorAction = (message: string) => ({
  type: AuthActionType.SIGN_IN_ERROR,
  payload: message,
});

export const authSignoutAction = () => ({
  type: AuthActionType.SIGN_OUT,
});

export const userEditActionType = (payload: {
  data: UserEditPayloadType;
  image?: File;
}) => ({
  type: AuthActionType.USER_EDIT,
  payload,
});

export const userEditCompleteActionType = (payload: User) => ({
  type: AuthActionType.USER_EDIT_COMPLETED,
  payload,
});

export const userEditErrorActionType = (payload: string) => ({
  type: AuthActionType.USER_EDIT_ERROR,
  payload,
});

export const authFetchMeAction = () => ({ type: AuthActionType.FETCH_ME });

export const authFetchMeCompletedAction = (user: User) => ({
  type: AuthActionType.FETCH_ME_COMPLETED,
  payload: user,
});

export const authFetchMeErrorAction = (message: string) => ({
  type: AuthActionType.FETCH_ME_ERROR,
  payload: message,
});

export const authForgotPasswordAction = (email: string) => ({
  type: AuthActionType.FORGOT_PASSWORD,
  payload: email,
});

export const authForgotPasswordCompletedAction = (message: string) => ({
  type: AuthActionType.FORGOT_PASSWORD_COMPLETED,
  payload: message,
});

export const authForgotPasswordErrorAction = (message: string) => ({
  type: AuthActionType.FORGOT_PASSWORD_ERROR,
  payload: message,
});

export const resetPasswordAction = (data: {
  code: string;
  email: string;
  password: string;
  logout_to_all: boolean;
}) => ({
  type: AuthActionType.RESET_PASSWORD,
  payload: data,
});

export const resetPasswordCompletedAction = () => ({
  type: AuthActionType.RESET_PASSWORD_COMPLETED,
});

export const resetPasswordErrorAction = (message: string) => ({
  type: AuthActionType.RESET_PASSWORD_ERROR,
  payload: message,
});

export const changePasswordAction = (data: {
  old_password: string;
  password: string;
  password_confirmation: string;
}) => ({
  type: AuthActionType.CHANGE_PASSWORD,
  payload: data,
});

export const changePasswordCompletedAction = (user: User) => ({
  type: AuthActionType.CHANGE_PASSWORD_COMPLETED,
  payload: user,
});

export const changePasswordErrorAction = (message: string) => ({
  type: AuthActionType.CHANGE_PASSWORD_ERROR,
  payload: message,
});
