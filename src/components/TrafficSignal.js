import {useState} from 'react';
import LightImage from './LightImage';

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
      lightStat.count = 0;
    });
    setLightStats(updatedStats);
  }

  return (
    <div>
      <LightImage light={currentLight} clickHandler={nextLightCycle} />
      <hr />
      <button className='action' onClick={() => forceLight("Red")}>Set Red</button>
      <button className='action' onClick={() => forceLight("Yellow")}>Set Yellow</button>
      <button className='action' onClick={() => forceLight("Red")}>Set Green</button>
      <hr />
      <div>
        <h3>Light Stats</h3>
      </div>
      <div className='stat'>
        <span>Red: </span><span>{lightStats["Red"]}</span>
      </div>
      <div className='stat'>
        <span>Yellow: </span><span>{lightStats["Yellow"]}</span>
      </div>
      <div className='stat'>
        <span>Green: </span><span>{lightStats["Green"]}</span>
      </div>
      <div>
        <button onClick={() => resetStats()}>Reset Stats</button>
      </div>
    </div>
  )
}

export default TrafficSignal;