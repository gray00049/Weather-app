import './App.css'
import AirQuality from './components/AirQuality/AirQuality'
import Container from './components/Container'
import Grid from './components/Grid'
import SunTime from './components/SunTime/SunTime'
import Temperature from './components/Temperature/Temperature'
import WeekData from './components/WeekData/WeekData'

function App() {
  return (
    <Container>
      <Grid>
        <Temperature />
        <AirQuality />
        <SunTime />
        <WeekData />
      </Grid>
    </Container>
  )
}

export default App
