import './App.css';
import './components/LightImage';
import TrafficSignal from './components/TrafficSignal';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Traffic Signal Test</h1>
      </header>
      <TrafficSignal />
    </div>
  );
}

export default App;
