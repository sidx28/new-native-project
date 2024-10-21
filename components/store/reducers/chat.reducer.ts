import { Reducer } from "@reduxjs/toolkit";
import { produce } from "immer";
import { EntityState } from "../base/EntityState";
import { SocketActionType } from "../actions/actions.constants";

export interface ChatState extends EntityState {
  isConnected: boolean;
  room: string;
  messages: string[];
}

const initialState = {
  entities: {},
  isConnected: false,
  room: "",
  messages: [],
};

export const chatReducer: Reducer<ChatState> = (
  state: ChatState = initialState,
  action: any
) =>
  produce(state, (draft: ChatState) => {
    switch (action.type) {
      case SocketActionType.SOCKET_CONNECTED: {
        draft.isConnected = true;
        break;
      }
      case SocketActionType.JOIN_ROOM: {
        draft.room = action.payloadtrue;
        break;
      }
      case SocketActionType.SEND_MESSAGE: {
        draft.messages = [...state.messages, action.payload];
        break;
      }
      case SocketActionType.RECEIVE_MESSAGE: {
        draft.messages = [...state.messages, action.payload];
        break;
      }
      case SocketActionType.DISCONNECT_SOCKET: {
        draft.isConnected = false;
        draft.room = "";
        draft.messages = [];
        break;
      }
    }
  });
