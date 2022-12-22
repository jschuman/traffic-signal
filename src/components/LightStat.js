const LightStat = ({name, count}) => {
  return (
    <div className='stat'>
      <span>{name}: </span><span>{count}</span>
    </div>
  )
}

export default LightStat;