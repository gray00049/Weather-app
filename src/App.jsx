import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import WindDirection from './components/WindDirection/WindDirection';
import Container from './components/Container';
import Grid from './components/Grid';
import SunTime from './components/SunTime/SunTime';
import Temperature from './components/Temperature/Temperature';
import WeekData from './components/WeekData/WeekData';

import { loadData, setData, failedLoadData } from './redux/slices/weatherSlice';

function App() {
  const dispatch = useDispatch();

  const loadWeatherData = () => {
    dispatch(loadData());

    const URL = import.meta.env.VITE_WEATHER_API_URL;

    fetch(URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }

        return res.json();
      })
      .then((data) => dispatch(setData(data)))
      .catch(() => dispatch(failedLoadData()));
  };

  useEffect(() => {
    loadWeatherData();
  }, []);

  return (
    <Container>
      <Grid>
        <Temperature />
        <WindDirection />
        <SunTime />
        <WeekData />
      </Grid>
    </Container>
  );
}

export default App;
