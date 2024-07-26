import { Entity } from "../entity";

export interface User extends Entity {
  id: number;
  user_name: string;
  email: string;
  profile_picture_url?: string;
}
