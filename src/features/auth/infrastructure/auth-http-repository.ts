import { Axios } from "axios";
import { User } from "../../../core/domain/user";
import { AuthRepository } from "../domain/auth-reposotory";
import { Credentials } from "../domain/credentials";

export class AuthHttpRepository implements AuthRepository{

    AUTH_URL = 'http://developm.guess.net:8081/web/services/auth/login';

    constructor(private readonly axios: Axios){
    }
    login(credentials: Credentials): Promise<User> {
        throw new Error("Method not implemented.");
    }
    saveToken(token: string): void {
        throw new Error("Method not implemented.");
    }
    getToken(): string {
        throw new Error("Method not implemented.");
    }
    logout(): void {
        throw new Error("Method not implemented.");
    }

}