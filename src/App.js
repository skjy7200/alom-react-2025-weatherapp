import React, { useState, useEffect } from "react";
import { Container } from "./styles/StyledComponents";
import CurrentWeather from "./components/CurrentWeather";
import HourlyForecast from "./components/HourlyForecast";
import DailyForecast from "./components/DailyForecast";

function App() {
  const API_URL =
    "https://api.open-meteo.com/v1/forecast?latitude=37.566&longitude=126.9784&hourly=temperature_2m,weathercode&daily=weathercode,temperature_2m_max&timezone=Asia%2FTokyo&forecast_days=7";

  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setWeatherData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("API 에러:", err);
        setIsLoading(false);
      });
  }, []);

  return (
    <Container>
      <CurrentWeather weatherData={weatherData} isLoading={isLoading} />
      {!isLoading && weatherData && (
        <>
          <HourlyForecast weatherData={weatherData} />
          <DailyForecast weatherData={weatherData} />
        </>
      )}
    </Container>
  );
}

export default App;
