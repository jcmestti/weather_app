const cityFormUI = document.querySelector('form');
const cityCardUI = document.querySelector('.card');
const cityDetailsUI = document.querySelector('.details');
const cityTimeUI = document.querySelector('img.time');
const cityIconUI = document.querySelector('.icon img');

const updateUI = (data) => {
    // const cityDetails = data.cityDetails;
    // const cityWeather = data.cityWeather;

    // destructure properties
    const {cityDetails, cityWeather} = data;

    // update details template
    cityDetailsUI.innerHTML = `
        <h5 class="my-5">${cityDetails.EnglishName}</h5>
        <div class="my-3">${cityWeather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${cityWeather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>`;

        // update the night/day & icon images
        const iconSrc = `img/icons/${cityWeather.WeatherIcon}.svg`;
        cityIconUI.setAttribute('src', iconSrc);

        // let timeSrc = null;
        // if(cityWeather.IsDayTime) {
        //     timeSrc = 'img/day.svg';
        // } else {
        //     timeSrc = 'img/night.svg';
        // }
        let timeSrc = cityWeather.IsDayTime ? 'img/day.svg' : 'img/night.svg';
        cityTimeUI.setAttribute('src', timeSrc);

        // remove the d-none class if present    
        if(cityCardUI.classList.contains('d-none')) {
            cityCardUI.classList.remove('d-none');
        }
};

const updateCity = async (cityName) => {
    const cityDetails = await getCity(cityName);
    const cityWeather = await getWeather(cityDetails.Key);

    return {
        cityDetails: cityDetails,
        cityWeather: cityWeather
    };
};

cityFormUI.addEventListener('submit', e => {
    e.preventDefault();

    //cityFormUI.city is the value from <input name="city">
    const cityName = cityFormUI.city.value.trim();
    cityFormUI.reset();

    //update the UI with new city
    updateCity(cityName)
        .then(data => updateUI(data))
        .catch(err => console.log(err));
});

/* getCity(cityName)
        .then(data => {
            return getWeather(data.Key);
        })
        .then(data => {
            console.log(data);
        })
        .catch(err => console.log(err)); */
