import axios from "axios";
import { User } from "./models/User"

//Create a new user using Axios
// axios.post("http://localhost:3000/users", {
//     name: 'myName',
//     age: 21
// });

//Get information about specific user - with ID
// axios.get('http://localhost:3000/users/3');

const user = new User ({ id: 3 });
user.fetch();
setTimeout(() => {
    console.log(user);
}, 4000)