import { Eventing } from "./Eventing";
import { Sync } from "./Sync";
import { Attributes } from "./Attributes";
import { AxiosResponse } from "axios";

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
    public attributes: Attributes<UserData>;

    constructor(attrs: UserData) {
       this.attributes = new Attributes<UserData>(attrs);
    }
    // getter accessor - when you want to access any property of an object
    // get access to eventing and attributes Class methods
    get on(){
        return this.events.on;
        //do not call method - make it available on the class User
    }

    get trigger(){
        return this.events.trigger;
    }

    get get(){
        return this.attributes.get;
    }

    set(update: UserData): void{ 
        this.attributes.set(update);
        // trigger change event
        this.events.trigger('change');
    }

    fetch(): void{
        const id = this.attributes.get('id');
        if (typeof id !== 'number'){
            throw new Error('Cannot fetch without an id');
        }
        this.sync.fetch(id).then((response: AxiosResponse): void => {
            this.set(response.data);
        })
    } 

    save(): void{
        this.sync.save(this.attributes.getAll()).then((response: AxiosResponse): void => {
            this.trigger('save');
        }).catch(() => {
            this.trigger('error');
        })
    }
}