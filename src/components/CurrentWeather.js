import React from "react";
import {
  CurrentWeatherWrapper,
  Temperature,
  WeatherCode,
} from "../styles/StyledComponents";
import { getWeatherDescription } from "../utils/weather";

const CurrentWeather = ({ weatherData, isLoading }) => {
  if (isLoading || !weatherData?.hourly?.temperature_2m?.length) {
    return <div>로딩 중...</div>;
  }

  const temperature = weatherData.hourly.temperature_2m[0];
  const code = weatherData.hourly.weathercode[0];
  const description = getWeatherDescription(code);

  return (
    <CurrentWeatherWrapper>
      <Temperature>{temperature}°C</Temperature>
      <WeatherCode>{description}</WeatherCode>
    </CurrentWeatherWrapper>
  );
};

export default CurrentWeather;
