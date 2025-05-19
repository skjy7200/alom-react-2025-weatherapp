export const getWeatherDescription = (code) => {
  const weatherCodes = {
    0: "맑음",
    1: "대체로 맑음",
    2: "부분적으로 흐림",
    3: "흐림",
    45: "안개",
    48: "짙은 안개",
    51: "약한 이슬비",
    53: "보통 이슬비",
    55: "강한 이슬비",
    61: "약한 비",
    63: "보통 비",
    65: "강한 비",
    71: "약한 눈",
    73: "보통 눈",
    75: "강한 눈",
  };
  return weatherCodes[code] || "알 수 없음";
};

export const formatHourlyData = (weatherData) => {
  if (
    !weatherData ||
    !weatherData.hourly ||
    !Array.isArray(weatherData.hourly.time) ||
    !Array.isArray(weatherData.hourly.temperature_2m) ||
    !Array.isArray(weatherData.hourly.weathercode)
  ) {
    console.warn("⚠️ Hourly weather data가 불완전합니다:", weatherData);
    return [];
  }

  const { time, temperature_2m, weathercode } = weatherData.hourly;
  const length = Math.min(time.length, temperature_2m.length, weathercode.length);

  return time.slice(0, 7).map((t, idx) => ({
    time: `${new Date(t).getHours()}시`,
    temp: temperature_2m[idx],
    code: weathercode[idx],
  }));
};



export const formatDailyData = (weatherData) => {
  if (!weatherData || !weatherData.daily) return [];

  const { time, temperature_2m_max, weathercode } = weatherData.daily;

  return time.slice(0, 7).map((dateStr, idx) => {
    const date = new Date(dateStr);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const dayNames = ["일", "월", "화", "수", "목", "금", "토"];
    const dayOfWeek = dayNames[date.getDay()];

    return {
      date: `${month}월 ${day}일 (${dayOfWeek})`,
      temp: temperature_2m_max[idx],
      code: weathercode[idx],
    };
  });
};
