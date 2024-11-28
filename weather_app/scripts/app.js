const cityForm = document.querySelector('form');

const updateCity = async (city) => {
    
    const cityDetails = await getCity(city);
    const weather = await getWeather(cityDetails.Key);

    return {
        cityDetails: cityDetails,
        weather: weather
    }
    
}

cityForm.addEventListener('submit', event => {
    // prevent default action
    event.preventDefault();

    // get user input
    const city = cityForm.city.value.trim();
    cityForm.reset();

    updateCity(city)
        .then(data => console.log(data))
        .catch(error => console.log(error.message));    
});