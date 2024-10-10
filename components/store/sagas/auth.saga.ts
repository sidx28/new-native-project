import { User } from "@/components/models/entities/User";
import { authService } from "@/components/services/api-services/AuthService";
import { localStorageService } from "@/components/services/LocalStorageService";
import { SagaPayloadType } from "@/types/SagaPayload.type";
import { all, call, delay, put, takeLatest } from "redux-saga/effects";
import {
  AuthSigninActionPayloadType,
  AuthSignupActionPayloadType,
  authSignupCompletedAction,
} from "../actions/auth.action";
import { Alert } from "react-native";
import { AuthActionType } from "../actions/actions.constants";

interface SigninSagaPayloadType extends SagaPayloadType {
  payload: AuthSigninActionPayloadType;
}

interface SignupSagaPayloadType extends SagaPayloadType {
  payload: AuthSignupActionPayloadType;
}

function* signinSaga(data: SigninSagaPayloadType): any {
  try {
    const response: { user: User; token: string } = yield call(
      authService.signin,
      data.payload
    );
    localStorageService.setAuthToken(response?.token);
    yield put(authSignupCompletedAction(response.user));
    // yield call(history.push, AppRouteConfig.schemes._ROOT(currentModule));
    Alert.prompt("Sign Up Successfully");
  } catch (e: any) {}
}

function* signupSaga(data: SignupSagaPayloadType): any {
  try {
    const response: { user: User; token: string } = yield call(
      authService.signup,
      data.payload
    ); 
    localStorageService.setAuthToken(response?.token);
    yield put(authSignupCompletedAction(response.user));
    // yield call(history.push, AppRouteConfig.schemes._ROOT(currentModule));
    Alert.prompt("Sign Up Successfully");
  } catch (e: any) {
    // yield call(errorHandler, e, authSignupErrorAction);
  }
}

function* authSaga() {
  yield all([
    takeLatest(AuthActionType.SIGNIN, signinSaga),
    takeLatest(AuthActionType.SIGN_UP, signupSaga),
  ]);
}

export default authSaga;
