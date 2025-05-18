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
  if (!weatherData || !weatherData.hourly) return [];

  const { time, temperature_2m, weathercode } = weatherData.hourly;

  // 상위 7개 시간만 추출
  return time.slice(0, 7).map((t, idx) => {
    const hour = new Date(t).getHours();
    return {
      time: `${hour}시`,
      temp: temperature_2m[idx],
      code: weathercode[idx],
    };
  });
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
