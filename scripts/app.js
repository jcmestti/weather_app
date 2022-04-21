const cityForm = document.querySelector('form');

const updateUICity = async (cityName) => {
    const cityDetails = await getCity(cityName);
    const cityWeather = await getWeather(cityDetails.Key);

    return {
        cityDetails: cityDetails,
        cityWeather: cityWeather
    };
}

cityForm.addEventListener('submit', e => {
    e.preventDefault();

    //cityForm.city is the value from <input name="city">
    const cityName = cityForm.city.value.trim();
    cityForm.reset();

    //update the UI with new city
    updateUICity(cityName)
        .then(data => console.log(data))
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
