const clock = document.querySelector('.clock');

const now = new Date();
const before = new Date('Nov 25 2023 01:38:13')
console.log(now);
console.log(typeof now);
console.log('getFullYear: ', now.getFullYear());
console.log('getMonth: ', now.getMonth());
console.log('getDay: ', now.getDay());
console.log('getDate: ', now.getDate());
console.log('getHours: ', now.getHours());
console.log('getMinutes: ', now.getMinutes());
console.log('getSeconds: ', now.getSeconds());

// Timestamp
console.log('getTimestamp: ', now.getTime());

// date strings
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());

const diff = now.getTime() - before.getTime();
console.log(diff);

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);

console.log(mins, hours, days);

console.log(`The blog was created in ${days} days ago`);
