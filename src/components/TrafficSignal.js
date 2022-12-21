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
    if (light !== currentLight) {
      setCurrentLight(light);
      updateStatsForLight(light);
    }
  }

  const updateStatsForLight = (light) => {
    let updatedStats = { ...lightStats };
    updatedStats[light] = lightStats[light] + 1;
    setLightStats(updatedStats);
  }

  const resetStats = () => {
    setLightStats({
      "Red": 0,
      "Green": 0,
      "Yellow": 0
    });
  }

  return (
    <div>
      <LightImage light={currentLight} clickHandler={nextLightCycle} />
      <hr />
      <button class='action' onClick={() => forceLight("Red")}>Set Red</button>
      <button class='action' onClick={() => forceLight("Yellow")}>Set Yellow</button>
      <button class='action' onClick={() => forceLight("Red")}>Set Green</button>
      <hr />
      <div>
        <span>Light Stats</span>
      </div>
      <div>
        <span>Red: </span><span>{lightStats["Red"]}</span>
      </div>
      <div>
        <span>Yellow: </span><span>{lightStats["Yellow"]}</span>
      </div>
      <nobr />
      <div>
        <span>Green: </span><span>{lightStats["Green"]}</span>
      </div>
      <nobr />
      <div>
        <button onClick={() => resetStats()}>Reset Stats</button>
      </div>
    </div>
  )
}

export default TrafficSignal;