import { User } from "./models/User";

const user = new User({name: "Elzaan", age: 30});
const user1 = new User({});

user1.set({name: "Elzaan"});

user.set({name: "Lizaan", age: 99});
user.set({age: 49});

console.log(user.get("name"));
console.log(user.get("age"));
