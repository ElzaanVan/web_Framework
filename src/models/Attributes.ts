
// Setting up generic constraint
// Limiting the different type that we pass in as an argument
// Then we are looking up the given key on the interface T to understand what type of value we are returning
export class Attributes<T> {
    constructor(private Data: T){}

    //Gets a single piece of info about the user (name, age)
    //Remember arrow functions are always going to be correctly bound to our instance of attributes we create!
    get = <K extends keyof T>(key: K): T[K] => {
        return this.Data[key];
    }
    //Changes/updates info about the user
    set(update: T): void {
        //Copy all the values of update and insert into this.Data 
        Object.assign(this.Data, update);
    }

    getAll = (): T => {
        return this.Data;
    }
}

