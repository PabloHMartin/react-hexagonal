import { User } from "../../../core/domain/user";
import { Credentials } from "./credentials";

export interface AuthRepository {
    login(credentials: Credentials): Promise<User>;
    saveToken(token: string): void;
    getToken(): string;
    logout(): void;
}