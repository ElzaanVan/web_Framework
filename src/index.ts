import { UserEdit } from "./views/UserEdit";
import { User } from './models/User';

// Rendering Userform in HTML
const user = User.buildUser({ name: "Denti",  age: 8 });

const root = document.getElementById('root');

if (root) {
    const userEdit = new UserEdit(root, user);
    userEdit.render();
    console.log(userEdit)
}else {
    alert ("error");
}