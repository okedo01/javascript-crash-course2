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
        this.score = 0;
    }
    login() {
        console.log(`${this.username} just logged in`);
        return this;
    }
    logout() {
        console.log(`${this.username} just logged out`);
        return this;
    }
    incScore() {
        this.score += 1;
        console.log(`${this.username} has scored ${this.score}`);
        return this;
    }
}

const userFour = new user("Okedo", "okedo@gmail.co.tz");
const userFive = new user("Marvel", "marvel@gmail.nida.tz");
// const userSix = new user("Stallion", "stallion@gmail.co.tz");
// const userSeven = new user("Sparrow", "sparrow@gmail.nida.tz");

console.log(userFour, userFive);

// userFour.login();
// userFour.logout();

userFour.login().incScore().incScore().logout();
