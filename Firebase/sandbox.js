db.collection().get().then(snapshot => {
    console.log(snapshot);
}).catch(error => {
    console.log(error.message);
})