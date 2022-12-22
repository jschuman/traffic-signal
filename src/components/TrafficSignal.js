import {useState} from 'react';
import LightImage from './LightImage';
import ForceLightButton from './ForceLightButton';
import StatsArea from './StatsArea';

const TrafficSignal = () => {
  let [currentLight, setCurrentLight] = useState("Red");
  let [lightStats, setLightStats] = useState([
    {name: "Red", count: 0},
    {name: "Yellow", count: 0},
    {name: "Green", count: 0}
  ])

  const cycle = {
    "Red": "Green",
    "Green": "Yellow",
    "Yellow": "Red"
  }

  const nextLightCycle = () => {
    let nextLight = cycle[currentLight];
    setCurrentLight(nextLight);
    updateStatsForLight(nextLight);
  }

  const forceLight = (light) => {
    if (light !== currentLight) {
      setCurrentLight(light);
      updateStatsForLight(light);
    }
  }

  const updateStatsForLight = (light) => {
    let updatedStats = lightStats.map((lightStat) => {
      if (lightStat.name === light) {
        lightStat.count = lightStat.count + 1;
      }
      return lightStat;
    });
    setLightStats(updatedStats);
  }

  const resetStats = () => {
    let updatedStats = lightStats.map((lightStat) => {
      return {...lightStat, count: 0};
    });
    setLightStats(updatedStats);
  }

  return (
    <div>
      <LightImage light={currentLight} clickHandler={nextLightCycle} />
      <hr />
      <ForceLightButton caption="Set Red" onClick={() => forceLight("Red")} />
      <ForceLightButton caption="Set Yellow" onClick={() => forceLight("Yellow")} />
      <ForceLightButton caption="Set Green" onClick={() => forceLight("Red")} />
      <hr />
      <StatsArea lightStats={lightStats} resetHandler={resetStats} />
    </div>
  )
}

export default TrafficSignal;