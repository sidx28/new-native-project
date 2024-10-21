import { SocketActionType } from "./actions.constants";

export const connectSocketAction = () => ({
  type: SocketActionType.CONNECT_SOCKET,
});

export const joinRoomAction = (room: string) => ({
  type: SocketActionType.JOIN_ROOM,
  payload: room,
});

export const sendMessageAction = (room: string, message: string) => ({
  type: SocketActionType.SEND_MESSAGE,
  payload: { room, message },
});

export const receiveMessageAction = (message: string) => ({
  type: SocketActionType.RECEIVE_MESSAGE,
  payload: message,
});

export const disconnectSocketAction = () => ({
  type: SocketActionType.DISCONNECT_SOCKET,
});
