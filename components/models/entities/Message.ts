import { Entity } from "../entity";
import { User } from "./User";

export interface Message extends Entity {
  id: number;
  is_group: boolean;
  name: string;
  created_by_id: number;
  created_by: User;
  room: string;
}
