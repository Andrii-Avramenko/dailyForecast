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
} from "./Forecast.styled";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);
const API_KEY = "86ba681065c86ffb0f2df60a563c969a";

const LAT = 50.0755; 
const LON = 14.4378;

function formatHour(unixSeconds) {
  const date = new Date(unixSeconds * 1000);
  return date.toLocaleTimeString([], { hour: "numeric" }).toLowerCase().replace(" ", " ");
}

function formatDayShort(unixSeconds) {
  const date = new Date(unixSeconds * 1000);
  return date.toLocaleDateString([], { month: "short", day: "numeric" });
}

function formatDay(unixSeconds) {
  const date = new Date(unixSeconds * 1000);
  return date.toLocaleDateString([], { weekday: "short", month: "short", day: "numeric" });
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=${LON}&units=metric&appid=${API_KEY}`;

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch forecast");
        return res.json();
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
  }, []);

  if (loading) {
    return (
      <Wrapper>
        <StatusText>Loading forecast...</StatusText>
      </Wrapper>
    );
  }

  if (error) {
    return (
      <Wrapper>
        <StatusText>Something went wrong: {error}</StatusText>
      </Wrapper>
    );
  }

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
      <Card>
        <CardTitle>Hourly forecast</CardTitle>
        <ChartWrapper>
          <Line data={chartData} options={chartOptions} />
        </ChartWrapper>
      </Card>

      <Card>
        <CardTitle>5-day forecast</CardTitle>
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
    </Wrapper>
  );
}