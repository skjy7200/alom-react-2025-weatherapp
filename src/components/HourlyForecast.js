import React from "react";
import {
  HourlyForecastWrapper,
  HourlyItem,
} from "../styles/StyledComponents";
import { getWeatherDescription, formatHourlyData } from "../utils/weather";

const HourlyForecast = ({ weatherData }) => {
  const hourly = formatHourlyData(weatherData);

  return (
    <HourlyForecastWrapper>
      {hourly.map((item, i) => (
        <HourlyItem key={i}>
          <div>{item.time}</div>
          <div>{item.temp}°C</div>
          <div>{getWeatherDescription(item.code)}</div>
        </HourlyItem>
      ))}
    </HourlyForecastWrapper>
  );
};

export default HourlyForecast;
