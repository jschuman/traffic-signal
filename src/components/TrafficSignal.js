import {useState} from 'react';
import LightImage from './LightImage';

const TrafficSignal = () => {
  let [currentLight, setCurrentLight] = useState("Red");

  const cycle = {
    "Red": "Green",
    "Green": "Yellow",
    "Yellow": "Red"
  }

  const nextLightCycle = () => {
    setCurrentLight(cycle[currentLight]);
  }

  const forceLight = (light) => {
    setCurrentLight(light);
  }

  return (
    <div>
      <LightImage light={currentLight} clickHandler={nextLightCycle} />
      <hr />
      <button class='action' onClick={() => forceLight("Red")}>Make Red</button>
      <button class='action' onClick={() => forceLight("Green")}>Make Green</button>
      <button class='action' onClick={() => forceLight("Yellow")}>Make Yellow</button>
    </div>
  )
}

export default TrafficSignal;