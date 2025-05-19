import React from "react";
import {
  DailyForecastWrapper,
  DailyItem,
} from "../styles/StyledComponents";
import { getWeatherDescription, formatDailyData } from "../utils/weather";

const DailyForecast = ({ weatherData }) => {
  const daily = formatDailyData(weatherData);

  return (
    <DailyForecastWrapper>
      {daily.map((item, i) => (
        <DailyItem key={i}>
          <div>{item.date}</div>
          <div>{getWeatherDescription(item.code)}</div>
          <div>{item.temp}°C</div>
        </DailyItem>
      ))}
    </DailyForecastWrapper>
  );
};

export default DailyForecast;
