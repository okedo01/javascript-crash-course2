// console.log(1);
// console.log(2);
setTimeout(() => {
    // console.log('async function fired');
}, 2000)
// console.log(3);
// console.log(4);


const getSomething = () => {
    return new Promise((resolve, reject) => {
        // resolve("some data");
        reject("data error");
    })
}

getSomething()
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    })


// fetch('todos/luigi.json')
//     .then(response => {
//         console.log("resolved", response);
//         return response.json();
//     }).then(data => {
//         console.log(data);
//     }).catch(error => {
//         console.log("rejected", error);
//     })


// Async & Await
const getData = async () => {
    const response = await fetch('todos/luigiss.json');
    
    if(response.status !== 200) {
        throw new Error("cannot fetch data");
    }
    
    const data = await response.json();
    return data;
}

console.log(1);
console.log(2);

getData()
    .then(data => console.log("resolved: ", data))
    .catch(error => console.log("rejected: ", error.message));

console.log(3);
console.log(4);