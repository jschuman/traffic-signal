const LightImage = ({light, clickHandler}) => {

  const imageSource = `../${light}_traffic_signal.svg`
  const imageAlt = `${light} Traffic Signal`

  return (
    <div>
      <img class="light" src={imageSource} alt={imageAlt} onClick={clickHandler}></img>
    </div>
  )
}

export default LightImage;