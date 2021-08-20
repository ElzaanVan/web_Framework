import { Eventing } from "./Eventing";
import { Sync } from "./Sync";

export interface UserData {
    // Make properties optional by adding?
    name ?: string;
    age ?: number;
    id?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User {
    public events: Eventing = new Eventing();
    public sync: Sync<UserData> = new Sync<UserData>(rootUrl);

    constructor(private Data: UserData){}

    //Gets a single piece of info about the user (name, age)
    get(propName: string): (string | number) {
        return this.Data[propName];
    }
    //Changes/updates info about the user
    set(update: UserData): void {
        //Copy all the values of update and insert into this.Data 
        Object.assign(this.Data, update);
    }
}