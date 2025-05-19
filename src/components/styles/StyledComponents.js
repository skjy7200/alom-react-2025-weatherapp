import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  padding: 20px;
  color: white;
  background: linear-gradient(to bottom, #5ba4d6, #2e86c1);
  min-height: 100vh;
`;

export const CurrentWeatherWrapper = styled.div`
  margin: 30px 0;
`;

export const Temperature = styled.div`
  font-size: 60px;
  font-weight: bold;
`;

export const WeatherCode = styled.div`
  font-size: 20px;
  margin-top: 10px;
`;

export const HourlyForecastWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  margin-bottom: 20px;
`;

export const HourlyItem = styled.div`
  min-width: 80px;
  margin: 0 10px;
  text-align: center;
`;

export const DailyForecastWrapper = styled.div`
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
`;

export const DailyItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  &:last-child {
    border-bottom: none;
  }
`;
