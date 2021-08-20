import axios, { AxiosResponse } from "axios";

interface UserData {
    // Make properties optional by adding?
    name ?: string;
    age ?: number;
    id?: number;
}

//Type Alias
//function that takes no arguments and returns nothing 
type CallBackFunc = () => void;

export class User {
    //Store Events
    events: { [key: string]: CallBackFunc[] } = {};

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
    //Event Listener method -  register an event handler - so other parts of the app know when something changes
    on(eventName: string, callback: CallBackFunc): void {
       const handlers =  this.events[eventName] || [];
       handlers.push(callback);
       this.events[eventName] = handlers;
    }
    //Triggers an event to tell other parts of the app something has changed
    trigger(eventName: string): void {
        const handlers = this.events[eventName];

        if (!handlers || handlers.length === 0) {
            return;
        }
        handlers.forEach(callback => {
            callback();
        });
    }

    //Fetch - to fetch some data from the server about a particular user .then
    fetch(): void {
        axios.get(`http://localhost:3000/users/${this.get('id')}`).then((response: AxiosResponse): void => {
            this.set(response.data);
            }
        
        );
    }
}