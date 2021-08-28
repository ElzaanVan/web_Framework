import axios, { AxiosPromise } from "axios";

interface hasId {
    id?: number
}

export class ApiSync<T extends hasId>{
    constructor(public rootUrl: string) {};

        //Fetch - to fetch some data from the server about a particular user .then
        fetch(id: number): AxiosPromise {
            return axios.get(`${this.rootUrl}/${id}`);
        }
    
        //Save - check if user has an ID ? PUT request : POST request
        save(data: T ): AxiosPromise {
            const id = data.id;
    
            if(id){
            // PUT
            return axios.put(`${this.rootUrl}/${id}`, data);
            } else {
            // POST
            return axios.post(this.rootUrl, data);
            }
        }
}


