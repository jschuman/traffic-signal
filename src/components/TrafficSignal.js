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

  return (
    <LightImage light={currentLight} clickHandler={nextLightCycle} />
  )
}

export default TrafficSignal;