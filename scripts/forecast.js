const key = 'AUtBRXIxO5nafeaw8PloxLxufGyDvr7Z';

//gets city key based on the city name
const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
}

//gets weather information based on the city key informed
const getWeather = async (id) => {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    data = await response.json();

    return data[0];
}

/* getCity('manchester')
    .then(data => {
        return getWeather(data.Key);
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => console.log(err)); */