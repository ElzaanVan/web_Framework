import { Views } from "./Views";
import { User, UserData } from "../models/User";

export class UserShow extends Views<User, UserData> {
    template(): string {
        return `
        <div>
        <h1>User Details</h1>
        <p>User name: ${this.model.get('name')}</p>
        <p>User age: ${this.model.get('age')}</p>
        </div>
        
        `;
    }
}