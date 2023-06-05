import { createSlice } from '@reduxjs/toolkit';
import changeWeatherCode from '../../utils/changeWeatherCode';
import getStatisticData from '../../utils/getStatisticData';

const initialState = {
  weatherData: {
    dailyWeather: {},
  },
  loading: true,
  error: false,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    loadData: (state) => ({ ...state, loading: true }),
    setData: (state, action) => {
      const {
        current_weather: currentWeather,
        daily: dailyWeather,
        hourly: hourlyWeater,
      } = action.payload;

      const {
        sunset: [sunset],
        sunrise: [sunrise],
      } = dailyWeather;

      currentWeather.sunset = sunset;
      currentWeather.sunrise = sunrise;

      currentWeather.weathercode = changeWeatherCode(
        currentWeather.weathercode,
        currentWeather.is_day
      );

      [currentWeather.humidity, currentWeather.precipitation] =
        getStatisticData(currentWeather.time, hourlyWeater);

      return {
        weatherData: { currentWeather, dailyWeather, hourlyWeater },
        loading: false,
        error: false,
      };
    },
    failedLoadData: (state) => ({ ...state, loading: true, error: true }),
  },
});

export const { loadData, setData, failedLoadData } = weatherSlice.actions;
export default weatherSlice.reducer;
