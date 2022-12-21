const TrafficSignal = ({light}) => {

  const imageSource = `../${light}_traffic_signal.svg`
  const imageAlt = `${light} Traffic Signal`

  return (
    <div>
      <img src={imageSource} alt={imageAlt}></img>
    </div>
  )
}

export default TrafficSignal;