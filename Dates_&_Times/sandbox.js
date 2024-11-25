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

const tick = () => {
    const now = new Date();

    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    const html = `
        <span>${h}</span> :
        <span>${m}</span> :
        <span>${s}</span>
    `;

    clock.innerHTML = html;
    
}

setInterval(tick, 1000);

// date fns library
const newDate = new Date();

// console.log(dateFns.isToday(newDate));

console.log(dateFns.format(newDate, 'YYYY'));
console.log(dateFns.format(newDate, 'MMMM'));
console.log(dateFns.format(newDate, 'dddd'));
console.log(dateFns.format(newDate, 'Do'));
console.log(dateFns.format(newDate, 'dddd Do MMMM YYYY'));

const beforeToday = new Date('Jan 25 2024 18:30:00');

console.log(dateFns.distanceInWords(newDate, beforeToday, {addSuffix: true}));
