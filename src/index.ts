import axios from "axios";

//Create a new user using Axios
// axios.post("http://localhost:3000/users", {
//     name: 'myName',
//     age: 21
// });

//Get information about specific user - with ID
axios.get('http://localhost:3000/users/3');