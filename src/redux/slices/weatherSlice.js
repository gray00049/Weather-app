import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  weatherData: {},
  loading: false,
  error: false,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    loadData: (state) => ({ ...state, loading: true }),
    setData: (state, action) => {
      const { current_weather: currentWeather, daily: dailyWeather } =
        action.payload;

      return {
        weatherData: { currentWeather, dailyWeather },
        loading: false,
        error: false,
      };
    },
    failedLoadData: (state) => ({ ...state, loading: false, error: true }),
  },
});

export const { loadData, setData, failedLoadData } = weatherSlice.actions;
export default weatherSlice.reducer;
