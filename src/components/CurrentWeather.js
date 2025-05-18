import React from "react";
import {
  CurrentWeatherWrapper,
  Temperature,
  WeatherCode,
} from "./styles/StyledComponents";
import { getWeatherDescription } from "../utils/weather";

const CurrentWeather = ({ weatherData, isLoading }) => {
  if (isLoading || !weatherData) {
    return <div>로딩 중...</div>;
  }

  const temperature = weatherData.current?.temperature ?? 0;
  const code = weatherData.current?.weatherCode ?? 0;
  const description = getWeatherDescription(code);

  return (
    <CurrentWeatherWrapper>
      <Temperature>{temperature}°C</Temperature>
      <WeatherCode>{description}</WeatherCode>
    </CurrentWeatherWrapper>
  );
};

export default CurrentWeather;
