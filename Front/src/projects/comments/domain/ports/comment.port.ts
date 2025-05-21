import { Domain } from "../entities/commentEntity";

export const notePort = Symbol("notePort");

export interface ICrudPort{
    getAll(): Promise<Domain[]>;
    getById(id: number): Promise<Domain>;
    getByUserId(user: string): Promise<Domain[]>;
    create(note: Domain): Promise<Domain>;
    update(note: Domain): Promise<Domain>;
    delete(id: number): Promise<Domain>;
}