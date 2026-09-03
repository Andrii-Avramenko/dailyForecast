import axios from "axios";

const BASE_URL = "https://api.openweathermap.org";

const API_KEY = "e3544af785f813ecfa684286223143f6";

export const fetchForecast = (lat, lon) => {
  return axios
    .get(`${BASE_URL}/data/2.5/forecast`, {
      params: { lat, lon, units: "metric", appid: API_KEY },
    })
    .then((response) => response.data)
    .catch(() => {
      throw new Error("Failed to fetch forecast");
    });
};

const fetchCityForecast = (cityName) => {
  return axios
    .get(`${BASE_URL}/data/2.5/weather`, {
      params: { q: cityName, appid: API_KEY, units: "metric" },
    })
    .then((response) => response.data)
    .catch(() => {
      throw new Error("City not found!");
    })
    .then((data) => {
      if (typeof window !== "undefined") {
        const date = new Date(data.dt * 1000);
        const event = new CustomEvent("cityForecastAdded", {
          detail: {
            city: data.name || cityName,
            country: data.sys?.country || "",
            lat: data.coord?.lat,
            lon: data.coord?.lon,
            temperature: Math.round(data.main?.temp ?? 0),
            description: data.weather?.[0]?.description || "clear sky",
            icon: data.weather?.[0]?.icon || "01d",
            time: date.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
            date: date.toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            }),
            day: date.toLocaleDateString("en-US", { weekday: "long" }),
          },
        });
        window.dispatchEvent(event);
      }
      return data;
    });
};

export default fetchCityForecast