interface UserData {
    name: string;
    age: number
}

export class User {
    constructor(private Data: UserData): (string | number){}

    get(propName: string): (string | number) {
        return this.Data[propName];
    }
}