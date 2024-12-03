const userOne = {
    username: "Okedo",
    email: "okedoStallion.co.tz",
    login() {
        console.log("the user logged in");
    },
    logout() {
        console.log("the user logged out");
    }
}

// console.log(userOne.username, userOne.email);
// userOne.login();

const userTwo = {
    username: "marvel",
    email: "marvelStallion.co.tz",
    login() {
        console.log("the user logged in");
    },
    logout() {
        console.log("the user logged out");
    }
}

// console.log(userTwo.username, userTwo.email);
// userTwo.login();

// const userThree = new user("Sparrow", "sparrow@nida.com")

class user {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
}

const userFour = new user("Okedo", "okedo@gmail.co.tz");
const userFive = new user("Marvel", "marvel@gmail.nida.tz");

console.log(userFour, userFive);
