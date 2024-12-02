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
