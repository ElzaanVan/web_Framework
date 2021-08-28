import { Model } from './models';
import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { ApiSync } from './ApiSync';

export interface UserData {
    // Make properties optional by adding?
    name ?: string;
    age ?: number;
    id?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User extends Model<UserData>{
   static buildUser(attrs: UserData): User {
       return new User(
           new Attributes<UserData>(attrs),
           new Eventing(),
           new ApiSync<UserData>(rootUrl)
       );
   }
    
}

// const user = User.buildUser({id: 50, name: "UserBuild", age: 50});

// console.log(user.get("id"))