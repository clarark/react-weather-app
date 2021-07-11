import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather city="New York" />
      <footer>
        This project was coded by Clara Redshaw Kranich and is {""}
      <a href="https://github.com/clarark/react-weather-app" target="_blank" rel="noreferrer">
        open-sourced on GitHub
      </a>
      </footer>
      </div>
    </div>
  );
}

export default App;
