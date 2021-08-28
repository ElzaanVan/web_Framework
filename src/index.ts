import { UserForm } from "./views/UserForm";
import { User } from './models/User';

// Rendering Userform in HTML
const user = User.buildUser({ name: "Denti",  age: 8 });

const userForm = new UserForm(document.getElementById('root'), user);
userForm.render();