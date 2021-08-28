import { User, UserData } from "../models/User";
import { CollectionViews } from "./CollectionViews";
import { UserShow } from "./UserShow";

export class UserList extends CollectionViews<User, UserData>{
    renderItem(model: User, itemParent: Element): void {
        new UserShow(itemParent, model).render();
    }
}