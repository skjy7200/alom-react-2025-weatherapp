import React from "react";
import {
  DailyForecastWrapper,
  DailyItem,
} from "./styles/StyledComponents";
import { getWeatherDescription, formatDailyData } from "../utils/weather";

const DailyForecast = ({ weatherData }) => {
  const dailyData = formatDailyData(weatherData);

  return (
    <DailyForecastWrapper>
      {dailyData.map((item, idx) => (
        <DailyItem key={idx}>
          <div>{item.date}</div>
          <div>{getWeatherDescription(item.code)}</div>
          <div>{item.temp}°C</div>
        </DailyItem>
      ))}
    </DailyForecastWrapper>
  );
};

export default DailyForecast;
