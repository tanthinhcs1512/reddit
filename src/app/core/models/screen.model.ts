import { Role } from './role.model'
export interface Screen {
    id: number;
    name: string;
    path: String;
    parent: number;
    roles: Role[];
  }
  