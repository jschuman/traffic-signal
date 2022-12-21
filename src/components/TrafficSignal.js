import {useState} from 'react';
import LightImage from './LightImage';

const TrafficSignal = () => {
  let [currentLight, setCurrentLight] = useState("Red");
  let [lightStats, setLightStats] = useState({
    "Red": 0,
    "Green": 0,
    "Yellow": 0
  })

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
    setCurrentLight(light);
    updateStatsForLight(light);
  }

  const updateStatsForLight = (light) => {
    let updatedStats = { ...lightStats };
    updatedStats[light] = lightStats[light] + 1;
    setLightStats(updatedStats);
  }

  return (
    <div>
      <LightImage light={currentLight} clickHandler={nextLightCycle} />
      <hr />
      <button class='action' onClick={() => forceLight("Red")}>Make Red</button>
      <button class='action' onClick={() => forceLight("Red")}>Make Green</button>
      <button class='action' onClick={() => forceLight("Yellow")}>Make Yellow</button>
    </div>
  )
}

export default TrafficSignal;