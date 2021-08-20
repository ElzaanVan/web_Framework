import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";

interface UserData {
    // Make properties optional by adding?
    name ?: string;
    age ?: number;
    id?: number;
}

export class User {
    public events: Eventing = new Eventing();

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

    //Fetch - to fetch some data from the server about a particular user .then
    fetch(): void {
        axios.get(`http://localhost:3000/users/${this.get('id')}`).then((response: AxiosResponse): void => {
            this.set(response.data);
            }
        
        );
    }

    //Save - check if user has an ID ? PUT request : POST request
    save(): void {
        const id = this.get('id');

        if(id){
        // PUT
        axios.put(`http://localhost:3000/users/${id}`, this.Data);
        } else {
        // POST
        axios.post('http://localhost:3000/users', this.Data);
        }
    }

}