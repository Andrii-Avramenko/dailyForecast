import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import {
  HiOutlineHeart,
  HiOutlineArrowRight,
  HiOutlineTrash,
  HiOutlineRefresh,
} from "react-icons/hi";
import {
  Wrapper,
  Card,
  CardTitle,
  ChartWrapper,
  DayList,
  DayRow,
  DayDate,
  DayIcon,
  DayTemp,
  DayDescription,
  StatusText,
  CitySection,
  CityGrid,
  CityCard,
  CityHeader,
  CityName,
  CityCountry,
  CityTime,
  CityTag,
  CityMeta,
  WeatherIcon,
  CityTempValue,
  CityActions,
  ActionButton,
  FavoriteButton,
  DeleteButton,
  MoreButton,
} from "./Forecast.styled";
import { API_KEY, fetchForecast } from "../../services/citySeach";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

const DEFAULT_COORDINATES = { lat: 50.0755, lon: 14.4378 };

const buildCurrentCityState = (data) => {
  const weather = data.weather?.[0];
  const date = new Date((Date.now() / 1000 + (data.timezone || 0)) * 1000);
  const dateOptions = { timeZone: "UTC" };

  return {
    city: data.name || "",
    country: data.sys?.country || "",
    time: `${String(date.getUTCHours()).padStart(2, "0")}:${String(
      date.getUTCMinutes()
    ).padStart(2, "0")}`,
    date: date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      ...dateOptions,
    }),
    day: date.toLocaleDateString("en-US", { weekday: "long", ...dateOptions }),
    temperature: Math.round(data.main?.temp ?? 0),
    icon: weather?.icon || "",
    description: weather?.description || "",
  };
};

function formatHour(unixSeconds) {
  const date = new Date(unixSeconds * 1000);
  return date.toLocaleTimeString([], { hour: "numeric" }).toLowerCase().replace(" ", " ");
}

function formatDayShort(unixSeconds) {
  const date = new Date(unixSeconds * 1000);
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function formatDay(unixSeconds) {
  const date = new Date(unixSeconds * 1000);
  return date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
}


function buildHourlyLabels(list) {
  let lastDateKey = null;

  return list.map((entry) => {
    const date = new Date(entry.dt * 1000);
    const dateKey = date.toDateString();
    const label = formatHour(entry.dt);

    if (dateKey !== lastDateKey) {
      lastDateKey = dateKey;
      return [label, formatDayShort(entry.dt)];
    }

    return label;
  });
}


function groupByDay(list) {
  const days = {};

  list.forEach((entry) => {
    const dateKey = new Date(entry.dt * 1000).toDateString();

    if (!days[dateKey]) {
      days[dateKey] = {
        dt: entry.dt,
        min: entry.main.temp_min,
        max: entry.main.temp_max,
        icon: entry.weather[0].icon,
        description: entry.weather[0].description,
        middayDiff: Math.abs(new Date(entry.dt * 1000).getHours() - 13),
      };
    } else {
      const day = days[dateKey];
      day.min = Math.min(day.min, entry.main.temp_min);
      day.max = Math.max(day.max, entry.main.temp_max);

      const diff = Math.abs(new Date(entry.dt * 1000).getHours() - 13);
      if (diff < day.middayDiff) {
        day.icon = entry.weather[0].icon;
        day.description = entry.weather[0].description;
        day.middayDiff = diff;
      }
    }
  });

  return Object.values(days);
}

export default function Forecast() {
  const [hourly, setHourly] = useState([]);
  const [daily, setDaily] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favoriteCities, setFavoriteCities] = useState([]);
  const [refreshingCityId, setRefreshingCityId] = useState(null);

  useEffect(() => {
    const handleCityAdded = async (event) => {
      const city = event.detail;
      if (!city?.city) return;

      setFavoriteCities((prevCities) => {
        const filtered = prevCities.filter(
          (item) => item.city.toLowerCase() !== city.city.toLowerCase()
        );

        return [
          {
            id: `${city.city}-${Date.now()}`,
          lat: data.coord?.lat,
          lon: data.coord?.lon,
            city: city.city,
            country: city.country || "",
            lat: city.lat,
            lon: city.lon,
            time: city.time || "14:00",
            date: city.date || "Today",
            day: city.day || "Today",
            temperature: city.temperature ?? 0,
            icon: city.icon || "01d",
            description: city.description || "clear sky",
          },
          ...filtered,
        ].slice(0, 3);
      });
    };

    window.addEventListener("cityForecastAdded", handleCityAdded);

    return () => {
      window.removeEventListener("cityForecastAdded", handleCityAdded);
    };
  }, []);

  useEffect(() => {
    if (!selectedCity) return;

    setLoading(true);
    setError(null);

    fetchForecast(selectedCity.lat, selectedCity.lon)
      .then((data) => {
        const currentUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${data.city.coord.lat}&lon=${data.city.coord.lon}&units=metric&appid=${API_KEY}`;

        return fetch(currentUrl).then((response) => {
          if (!response.ok) throw new Error("Failed to fetch current weather");
          return response.json();
        }).then((currentData) => {
          setFavoriteCities([{
            id: `${currentData.id}`,
            liked: false,
            ...buildCurrentCityState(currentData),
          }]);
          return data;
        });
      })
      .then((data) => {
        setHourly(data.list.slice(0, 16));
        setDaily(groupByDay(data.list));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [selectedCity]);

  const handleDeleteCity = (cityId) => {
    setFavoriteCities((prevCities) =>
      prevCities.filter((city) => city.id !== cityId)
    );
  };

  const handleLikeCity = (cityId) => {
    setFavoriteCities((prevCities) => {
      const index = prevCities.findIndex((city) => city.id === cityId);
      if (index === -1) return prevCities;

      const shouldLike = !prevCities[index].liked;
      const updatedCities = prevCities.map((city) => ({
        ...city,
        liked: shouldLike && city.id === cityId,
      }));

      if (!shouldLike) return updatedCities;

      const likedCity = updatedCities.find((city) => city.id === cityId);
      const withoutCity = updatedCities.filter((city) => city.id !== cityId);
      return [likedCity, ...withoutCity];
    });
  };

  const handleRefreshCity = (cityId) => {
    const city = favoriteCities.find((item) => item.id === cityId);
    if (!city || refreshingCityId === cityId) return;

    setRefreshingCityId(cityId);

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city.city)}&units=metric&appid=${API_KEY}`;

    fetch(url, { cache: "no-store" })
      .then((response) => {
        if (!response.ok) throw new Error("Failed to refresh city");
        return response.json();
      })
      .then((data) => {
        setFavoriteCities((prevCities) =>
          prevCities.map((item) =>
            item.id === cityId
              ? { id: cityId, liked: item.liked, ...buildCurrentCityState(data) }
              : item
          )
        );
      })
      .catch((err) => setError(err.message))
        .finally(() => setRefreshingCityId(null));
  };

  const chartData = {
    labels: buildHourlyLabels(hourly),
    datasets: [
      {
        data: hourly.map((h) => Math.round(h.main.temp)),
        borderColor: "#f5a25d",
        pointRadius: 0,
        pointHoverRadius: 4,
        pointHoverBackgroundColor: "#f5a25d",
        borderWidth: 2,
        tension: 0.4,
        fill: false,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { callbacks: { label: (ctx) => `${ctx.parsed.y}°C` } },
    },
    scales: {
      x: {
        grid: { color: "#d6d6d6", drawTicks: false },
        border: { display: false },
        ticks: { color: "#8a8a8a", font: { size: 10 } },
      },
      y: {
        grid: { color: "#d6d6d6", drawTicks: false },
        border: { display: false },
        position: "left",
        ticks: {
          color: "#8a8a8a",
          font: { size: 10 },
          stepSize: 5,
          callback: (value) => `${value}°C`,
        },
      },
    },
  };

  return (
    <Wrapper>
      <CitySection>
        <CityGrid>
          {favoriteCities.map((city) => (
            <CityCard key={city.id}>
              <CityHeader>
                <CityName>{city.city}</CityName>
                <CityCountry>{city.country}</CityCountry>
              </CityHeader>

              <CityTime>{city.time}</CityTime>

              <CityTag
                type="button"
                onClick={() => setSelectedCity(city)}
                aria-pressed={selectedCity?.id === city.id}
              >
                Hourly forecast
              </CityTag>

              <CityMeta>
                <span>{city.date}</span>
                <span>|</span>
                <span>{city.day}</span>
              </CityMeta>

              <WeatherIcon
                src={`https://openweathermap.org/img/wn/${city.icon}@2x.png`}
                alt={city.description}
              />

              <CityTempValue>{city.temperature}°C</CityTempValue>

              <CityActions>
                <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <DeleteButton
                    type="button"
                    aria-label="Refresh city"
                    onClick={() => handleRefreshCity(city.id)}
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      color: "#f0a25d",
                    }}
                  >
                    <HiOutlineRefresh />
                  </DeleteButton>

                  <FavoriteButton
                    type="button"
                    aria-label={city.liked ? "Unlike city" : "Like city"}
                    aria-pressed={city.liked}
                    onClick={() => handleLikeCity(city.id)}
                  >
                    {city.liked ? (
                      <span style={{ color: "#f04d5a", fontSize: 22 }}>
                        {"\u2665"}
                      </span>
                    ) : (
                      <HiOutlineHeart />
                    )}
                  </FavoriteButton>
                </div>

                <MoreButton type="button" disabled>
                  See more
                  <HiOutlineArrowRight style={{ marginLeft: 6 }} />
                </MoreButton>

                <DeleteButton
                  type="button"
                  aria-label="Delete city"
                  onClick={() => handleDeleteCity(city.id)}
                >
                  <HiOutlineTrash />
                </DeleteButton>
              </CityActions>
            </CityCard>
          ))}
        </CityGrid>
      </CitySection>

      {selectedCity && (
        <>
          {loading && <StatusText>Loading forecast for {selectedCity.city}...</StatusText>}
          {error && <StatusText>Something went wrong: {error}</StatusText>}
          {!loading && !error && (
            <>
              <Card>
                <CardTitle>Hourly forecast for {selectedCity.city}</CardTitle>
                <ChartWrapper>
                  <Line data={chartData} options={chartOptions} />
                </ChartWrapper>
              </Card>

              <Card>
                <CardTitle>5-day forecast for {selectedCity.city}</CardTitle>
                <DayList>
                  {daily.map((day) => (
                    <DayRow key={day.dt}>
                      <DayDate>{formatDay(day.dt)}</DayDate>
                      <DayIcon
                        src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
                        alt={day.description}
                      />
                      <DayTemp>
                        {Math.round(day.max)}/{Math.round(day.min)}°C
                      </DayTemp>
                      <DayDescription>{day.description}</DayDescription>
                    </DayRow>
                  ))}
                </DayList>
              </Card>
            </>
          )}
        </>
      )}
    </Wrapper>
  );
}