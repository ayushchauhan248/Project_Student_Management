import { Entity } from "./Entity";

export interface User extends Entity{
    id: number;
    first_name: string;
    middle_name: string;
    last_name: string;
    role:"staff" | "admin";
}