import logo from './logo.svg';
import './App.css';
import './components/TrafficSignal';
import TrafficSignal from './components/TrafficSignal';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Traffic Signal Test</h1>
      </header>
      <TrafficSignal light='Red' />
    </div>
  );
}

export default App;
