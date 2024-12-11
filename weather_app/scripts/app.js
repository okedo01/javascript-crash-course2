const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');
const forecast = new Forecast();

const updateUI = (data) => {

    // destructure properties
    const { cityDetails, weather } = data;

    // update details template
    details.innerHTML = `
        <h5 class="my-3">${cityDetails.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;

    // update day/night & icons
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    // ternary operator
    let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';
    time.setAttribute('src', timeSrc);

    // remove d-none class if present
    if(card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }
}

cityForm.addEventListener('submit', event => {

    // prevent default action
    event.preventDefault();

    // get user input
    const city = cityForm.city.value.trim();
    cityForm.reset();

    // localStorage
    localStorage.setItem("city", city);

    forecast.updateCity(city)
        .then(data => updateUI(data))
        .catch(error => alert(error.message));    
});

if(localStorage.getItem("city")) {
    forecast.updateCity(localStorage.getItem("city"))
        .then(data => updateUI(data))
        .catch(error => alert(error.message));
}