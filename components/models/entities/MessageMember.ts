import { Entity } from "../entity";
import { Message } from "./Message";
import { User } from "./User";

export interface MessageMember extends Entity {
  id: number;
  member_id: number;
  message_id: number;
  is_admin: boolean;
  message: Message;
  member: User;
}
