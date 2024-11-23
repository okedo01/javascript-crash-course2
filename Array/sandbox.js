const prices = [10, 20, 35, 40, 60, 5];

// MAP method
const salesPrice = prices.map((price) => {
    return price / 2;
})
// console.log(salesPrice);

const products = [
    {name: 'gold star', price: 20},
    {name: 'mushroom', price: 40},
    {name: 'green shells', price: 30},
    {name: 'banana skin', price: 10},
    {name: 'red shells', price: 50}
]

const salesProduct = products.map((product) => {
    if(product.price > 30) {
        return {name: product.name, price: product.price / 2};
    } else{
        return product;
    }
})
// console.log(salesProduct);



// FIND method
const findPrice = prices.find((price2) => {
    return price2 > 25;
})
// console.log(findPrice);



// REDUCE method
const result = prices.reduce((acc, curr) => {
    if(curr > 30) {
        acc++;
    }
    return acc;
}, 0)
// console.log(result);

const scores = [
    {player: 'okedo', score: 50},
    {player: 'marvel', score: 30},
    {player: 'okedo', score: 70},
    {player: 'sparrow', score: 60},
    {player: 'okedo', score: 80},
    {player: 'marvel', score: 30},
    {player: 'okedo', score: 90},
    {player: 'sparrow', score: 60},
    {player: 'okedo', score: 60},
    {player: 'marvel', score: 30},
    {player: 'okedo', score: 40},
    {player: 'sparrow', score: 60}
];

const totalScores = scores.reduce((acc, curr) => {
    if(curr.player === 'okedo') {
        acc += curr.score;
    }
    return acc;
}, 0);
// console.log(totalScores);


// SORT method
const players = [
    {player: 'okedo', score: 50},
    {player: 'marvel', score: 30},
    {player: 'okedo', score: 70},
    {player: 'sparrow', score: 60},
    {player: 'offocial', score: 80}
];

// const sortPlayers = players.sort((a, b) => {
//     if(a.score > b.score) {
//         return 1;
//     } else if(b.score > a.score) {
//         return -1;
//     } else {
//         return 0;
//     }
// })

players.sort((a, b) => {
    return a.score - b.score;
})
// console.log(players);



// CHAINING method
const items = [
    {name: 'gold star', price: 20},
    {name: 'mushroom', price: 40},
    {name: 'green shells', price: 30},
    {name: 'banana skin', price: 10},
    {name: 'red shells', price: 50}
];

// const filtered = items.filter((item) => {
//     return item.price > 25;
// });

// const promos = filtered.map((promo) => {
//     return `The ${promo.name} is ${promo.price / 2} euros`;
// });

const promos = items
    .filter(item => item.price > 20)
    .map(item => `The ${item.name} is ${item.price / 2} euros`);
console.log(promos);