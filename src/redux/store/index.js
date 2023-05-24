import { configureStore, combineReducers } from '@reduxjs/toolkit';
import weatherSlice from '../slices/weatherSlice';

const rootReducer = combineReducers({
  weather: weatherSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
