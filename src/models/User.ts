interface UserData {
    // Make properties optional by adding?
    name ?: string;
    age ?: number
}

export class User {
    constructor(private Data: UserData){}

    get(propName: string): (string | number) {
        return this.Data[propName];
    }
    set(update: UserData): void {
        //Copy all the values of update and insert into this.Data 
        Object.assign(this.Data, update);
    }
}