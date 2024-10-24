import { User } from "@/components/models/entities/User";
import { authService } from "@/components/services/api-services/AuthService";
import { localStorageService } from "@/components/services/LocalStorageService";
import { SagaPayloadType } from "@/types/SagaPayload.type";
import { all, call, delay, put, takeLatest } from "redux-saga/effects";
import {
  authFetchMeCompletedAction,
  authFetchMeErrorAction,
  AuthSigninActionPayloadType,
  authSigninCompletedAction,
  authSigninErrorAction,
  AuthSignupActionPayloadType,
  authSignupCompletedAction,
  authSignupErrorAction,
  fetchUsersCompletedAction,
  fetchUsersErrorAction,
} from "../actions/auth.action";
import { AuthActionType } from "../actions/actions.constants";
import Toast from "react-native-toast-message";
import { router } from "expo-router";

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
    yield put(authSigninCompletedAction(response.user));
    Toast.show({
      type: "success",
      text1: "Sign In Successfully",
      visibilityTime: 2000,
    });
  } catch (e: any) {
    yield put(authSigninErrorAction(e.message));
    Toast.show({
      type: "error",
      text1: "Something went wrong!",
      visibilityTime: 2000,
    });
  }
}

function* signupSaga(data: SignupSagaPayloadType): any {
  try {
    const response: { data: { user: User; token: string } } = yield call(
      authService.signup,
      data.payload
    );
    if (response.data) {
      localStorageService.setAuthToken(response?.data?.token);
      yield put(authSignupCompletedAction(response?.data?.user));
      router.replace("/chats-list");
      Toast.show({
        type: "success",
        text1: "Sign Up Successfully",
        visibilityTime: 2000,
      });
    }
  } catch (e: any) {
    yield put(authSignupErrorAction(e.message));
    Toast.show({
      type: "error",
      text1: e.message || "Something went wrong!",
      visibilityTime: 2000,
    });
  }
}

function* fetchMe(): any {
  try {
    const response: { data: { user: User } } = yield call(authService.fetchMe);
    if (response.data) {
      yield put(authFetchMeCompletedAction(response?.data?.user));
    }
  } catch (e: any) {
    yield put(authFetchMeErrorAction(e.message));
    Toast.show({
      type: "error",
      text1: "Something went wrong!",
      visibilityTime: 2000,
    });
  }
}

function* fetchUsers(): any {
  try {
    const response: { data: { users: User[] } } = yield call(
      authService.fetchUsers
    );
    if (response.data) {
      yield put(fetchUsersCompletedAction(response?.data?.users));
    }
  } catch (e: any) {
    yield put(fetchUsersErrorAction(e.message));
    Toast.show({
      type: "error",
      text1: "Something went wrong!",
      visibilityTime: 2000,
    });
  }
}

function* authSaga() {
  yield all([
    takeLatest(AuthActionType.SIGNIN, signinSaga),
    takeLatest(AuthActionType.SIGN_UP, signupSaga),
    takeLatest(AuthActionType.FETCH_ME, fetchMe),
    takeLatest(AuthActionType.FETCH_USERS, fetchUsers),
  ]);
}

export default authSaga;
