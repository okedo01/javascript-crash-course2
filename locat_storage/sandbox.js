// Store data in localStorage
localStorage.setItem("name", "Okedo");
localStorage.setItem("age", 24);

// Get data from localStorage
let name = localStorage.getItem("name");
let age = localStorage.getItem("age");

console.log(name, age);

// updating data
localStorage.setItem("name", "Marvel");
localStorage.age = "25";
name = localStorage.getItem("name");
age = localStorage.getItem("age");

console.log(name, age);

// Remove items
// localStorage.removeItem("name");
localStorage.clear();

name = localStorage.getItem("name");
age = localStorage.getItem("age");

console.log(name, age);

// Stringifying & Parsing data
const todos = [
    {name: "Luigi", location: "Loss Angelos"},
    {name: "Luigi", location: "New York"},
    {name: "Luigi", location: "Araska"},
    {name: "Luigi", location: "Mexico"}
]

// console.log(JSON.stringify(todos));
localStorage.setItem("todos", JSON.stringify(todos));

const stored = localStorage.getItem("todos");

console.log(JSON.parse(stored));

