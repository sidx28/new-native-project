export enum AuthActionType {
  SIGN_UP = "auth/signup",
  SIGN_UP_COMPLETED = "auth/signup/completed",
  SIGN_UP_ERROR = "auth/signup/error",

  SIGNIN = "auth/signin",
  SIGNIN_COMPLETED = "auth/signin/completed",
  SIGN_IN_ERROR = "auth/signin/error",

  FETCH_ME = "auth/fetch/me",
  FETCH_ME_COMPLETED = "auth/fetch/me/completed",
  FETCH_ME_ERROR = "auth/fetch/me/error",

  FORGOT_PASSWORD = "auth/forgot-password",
  FORGOT_PASSWORD_COMPLETED = "auth/forgot-password/completed",
  FORGOT_PASSWORD_ERROR = "auth/forgot-password/error",

  SIGN_OUT = "auth/signout",

  USER_EDIT = "user/edit",
  USER_EDIT_COMPLETED = "user/edit/completed",
  USER_EDIT_ERROR = "user/edit/error",

  RESET_PASSWORD = "auth/reset/password",
  RESET_PASSWORD_COMPLETED = "auth/reset/password/completed",
  RESET_PASSWORD_ERROR = "auth/reset/password/error",

  CHANGE_PASSWORD = "auth/change/password",
  CHANGE_PASSWORD_COMPLETED = "auth/change/password/completed",
  CHANGE_PASSWORD_ERROR = "auth/change/password/error",
}

export enum SocketActionType {
  CONNECT_SOCKET = "socket/connect",
  SOCKET_CONNECTED = "socket/connect/completed",
  JOIN_ROOM = "socket/join-room",
  SEND_MESSAGE = "socket/message/send",
  RECEIVE_MESSAGE = "socket/message/receive",
  DISCONNECT_SOCKET = "socket/disonnect",
}
