import React, {useState} from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response){
        setWeatherData({
            ready: true,
            coordinates: response.data.coord,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            wind: response.data.wind.speed,
            city: response.data.name
        });

    }

        function handleSubmit(event) {
            event.preventDefault();
            search();
        }
    
        function handleCityChange(event) {
            setCity(event.target.value);
        }

        function search() {
            const apiKey = "8eae015c5bbd359393dabf6e2f3a0e3e";
            let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
            axios.get(apiUrl).then(handleResponse);
        }
    
    if (weatherData.ready) {
    return(
        <div className="Weather"> 
          <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-4">
                    <input 
                    type="search" 
                    placeholder="Enter a city..." 
                    className="form-control" 
                    autoFocus="on" 
                    onChange={handleCityChange}
                    />
                </div>
                <div className="col-3">
                    <button type="submit" className="btn btn-primary w-100">Search</button>
                </div>
                <div className="col-5">
                    <button type="button" className="btn btn-success w-100">Current Location</button>
                </div>
            </div>
          </form>
          <WeatherInfo data={weatherData} />
          <WeatherForecast coordinates={weatherData.coordinates}/>
        </div> 
    );
 } else {
   search();
   return "Loading...";
    
  }
}