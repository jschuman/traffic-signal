const ForceLightButton = ({caption, onClick}) => {
  return (
    <button className='action' onClick={onClick}>{caption}</button>
  )
}

export default ForceLightButton;