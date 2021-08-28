import { Model } from './models';
import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { ApiSync } from './ApiSync';
import { Collection } from './collection';

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

   static buildUserCollection(): Collection <User, UserData>{
       return new Collection<User, UserData>(
        rootUrl,
        (json: UserData) => User.buildUser(json)
    );
   }
    
}