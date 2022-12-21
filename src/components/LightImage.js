const LightImage = ({light, clickHandler}) => {

  const imageSource = `../${light}_traffic_signal.svg`
  const imageAlt = `${light} Traffic Signal`

  return (
    <div>
      <img className="light" src={imageSource} alt={imageAlt} onClick={clickHandler}></img>
    </div>
  )
}

export default LightImage;