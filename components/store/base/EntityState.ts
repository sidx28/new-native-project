import { Entity } from "@/components/models/entity";

export interface EntityState<T extends Entity = Entity> {
  entities: { [id: number]: T };
  currentId?: number;
  loadingOne?: boolean;
  loadingList?: boolean;
  error?: string;
  listLoaded?: boolean;
}
