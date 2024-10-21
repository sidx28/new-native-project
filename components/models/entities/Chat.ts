import { Entity } from "../entity";
import { Message } from "./Message";
import { User } from "./User";

export interface Chat extends Entity {
  id: number;
  text: string;
  read: boolean;
  message_id: number;
  sender_id: number;
  sender: User;
  message: Message;
}
