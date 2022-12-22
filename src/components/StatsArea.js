import LightStat from './LightStat';

const StatsArea = ({lightStats, resetHandler}) => {
  return (
    <div className="stats">
      <div>
        <h3>Light Stats</h3>
      </div>
      { lightStats.map((lightStat) => {
        return (
          <LightStat key={lightStat.name} name={lightStat.name} count={lightStat.count} />
        )
      })}
      <div>
        <button onClick={resetHandler}>Reset Stats</button>
      </div>
      <p />
    </div>
  )
}

export default StatsArea;