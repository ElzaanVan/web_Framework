// import { UserEdit } from "./views/UserEdit";
// import { User } from './models/User';

// // Rendering Userform in HTML
// const user = User.buildUser({ name: "Denti",  age: 8 });

// const root = document.getElementById('root');

// if (root) {
//     const userEdit = new UserEdit(root, user);
//     userEdit.render();
//     console.log(userEdit)
// }else {
//     alert ("error");
// }

// Collection View
import { UserList } from "./views/UserList";
import { Collection } from "./models/collection";
import { User, UserData } from "./models/User";

const users = new Collection(
    'http://localhost:3000/users',
    ((json: UserData)=> {
        return User.buildUser(json);
    })
)

users.on('change', () => {
    const root = document.getElementById('root');
    if (root) {
        new UserList(root, users).render();
    }
})

users.fetch();