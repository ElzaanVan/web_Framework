import { AxiosPromise, AxiosResponse } from "axios";

interface Sync<T> {
    fetch(id: number): AxiosPromise;
    save(data: T): AxiosPromise;
}

interface Events {
    on(eventName: string, callback: () => void): void;
    trigger(eventName: string): void;
}

interface ModelAttributes<T> {
    get<K extends keyof T>(key: K): T[K];
    set(update: T): void;
    getAll(): T;
}

interface hasId {
    id?: number;
}

// Create constructor function thats going to take an instance of something that satisfies model attributes, sync and Events
export class Model<T extends hasId>{
    constructor(
        private attributes: ModelAttributes<T>,
        private events: Events,
        private sync: Sync<T> 
    ){}

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

    set(update: T): void{ 
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