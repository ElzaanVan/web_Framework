import { User, UserData } from "./models/User";


//Create a new user using Axios
// axios.post("http://localhost:3000/users", {
//     name: 'myName',
//     age: 21
// });

//Get information about specific user - with ID
// axios.get('http://localhost:3000/users/3');

// const user = new User ({ id: 3 });
// user.fetch();

//Test hack to see if the fetch is working
// setTimeout(() => {
//     console.log(user);
// }, 4000)


// Existing User
// const user = new User({ id: 3 });

// user.set({ age: 123 });
// user.set({ name: "Loandie" });

// user.save();


// New User
// const newUser = new User ({ name:"No Id", age: 30 });
// newUser.save();

//Event test after extraction
// const userEventTest = new User ({ name: "Bla", age: 0});
// userEventTest.events.on("change", () => {
//     console.log("Bla is 0");
// });

// userEventTest.events.trigger("change");


//Accessors -- getter 
// const user = new User({ id: 1, name: "Newer Name", age: 0});
// user.on('save', () => {
//     console.log(user);
// });


// console.log(user.get("name")); /// throws error --- because of `this` in JS (get in attributes does not have user -- going to return undefined//error) - use bound function

// user.set({ name: "new Name" });
// user.save();

//User Extends Model
// const user = User.buildUser({id: 50, name: "UserBuild", age: 50});
// console.log(user.get("id"))


//COLLECTION
const collection = User.buildUserCollection();
collection.on('change', () => {
    console.log(collection)
})

collection.fetch();