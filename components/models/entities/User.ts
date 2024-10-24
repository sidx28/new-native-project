import { Entity } from "../entity";

export interface User extends Entity {
  id: number;
  username: string;
  email: string;
  profile_picture_url?: string;
}
