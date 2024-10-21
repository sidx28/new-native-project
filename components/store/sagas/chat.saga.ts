import { eventChannel } from "redux-saga";
import { put, takeEvery, call, take, all } from "redux-saga/effects";
import io, { Socket } from "socket.io-client";
import { SocketActionType } from "../actions/actions.constants";
import {
  connectSocketAction,
  receiveMessageAction,
} from "../actions/chat.action";

let socket: Socket;

function connect() {
  socket = io(process.env.EXPO_PUBLIC_API_URL);
  return new Promise((resolve) => {
    socket.on("connect", () => {
      resolve(socket);
    });
  });
}

function createSocketChannel(socket: Socket) {
  return eventChannel((emit) => {
    socket.on("message", (data) => {
      emit(data);
    });

    return () => {
      socket.off("message");
    };
  });
}

function* handleSocketConnection(): any {
  const socket = yield call(connect);
  yield put(connectSocketAction());

  const socketChannel = yield call(createSocketChannel, socket);

  while (true) {
    const message = yield take(socketChannel);
    yield put(receiveMessageAction(message));
  }
}

function* handleJoinRoom(action: any): any {
  socket.emit("joinRoom", action.payload);
}

function* handleSendMessage(action: any) {
  const { room, message } = action.payload;
  socket.emit("message", { room, message });
}

export function* chatSaga() {
  yield all([
    takeEvery(SocketActionType.CONNECT_SOCKET, handleSocketConnection),
    takeEvery(SocketActionType.JOIN_ROOM, handleJoinRoom),
    takeEvery(SocketActionType.SEND_MESSAGE, handleSendMessage),
  ]);
}

export default chatSaga;
