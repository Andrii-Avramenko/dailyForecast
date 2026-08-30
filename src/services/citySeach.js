const BASE_URL = "https://api.openweathermap.org";

const API_KEY = "e3544af785f813ecfa684286223143f6";

const fetchCityForecast = (cityName) => {
    return fetch(`${BASE_URL}/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`).then(response => {
        if (!response.ok) {
            throw new Error("City not found!")
        }
        return response.json()
    })
}
export default fetchCityForecast