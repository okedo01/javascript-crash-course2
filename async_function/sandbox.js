console.log(1);
console.log(2);
setTimeout(() => {
    console.log('async function fired');
}, 2000)
console.log(3);
console.log(4);


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

