import React, {useState} from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setcity] = useState(props.defaultCity);

    function handleResponse(response){
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
            wind: response.data.wind.speed,
            city: response.data.name
        });

    }

        function search() {
            const apiKey = "8eae015c5bbd359393dabf6e2f3a0e3e";
            let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
            axios.get(apiUrl).then(handleResponse);
        }

        function handleSubmit(event) {
            event.preventDefault();
            search();
        }
    
        function handleCityChange(event) {
            setcity(event.target.value);
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
                    <button type="submit" class="btn btn-primary w-100">Search</button>
                </div>
                <div className="col-5">
                    <button type="button" class="btn btn-success w-100">Current Location</button>
                </div>
            </div>
          </form>
          <WeatherInfo data={weatherData} />
        </div> 
    );
 } else {
   search();
   return "Loading...";
    
  }
}