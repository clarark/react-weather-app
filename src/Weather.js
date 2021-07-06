import React from "react";
import "./Weather.css";

export default function Weather() {
    return(
        <div className="Weather"> 
          <form>
            <div className="row">
                <div className="col-6">
                    <input type="search" placeholder="Enter a city..."  className="form-control" />
                </div>
                <div className="col-3">
                    <button type="submit" class="btn btn-primary">Search</button>
                </div>
                <div className="col-3">
                    <button type="button" class="btn btn-success">Current Location</button>
                </div>
            </div>
          </form>
          <h1> New York</h1>
          <ul>
              <li>
                  Wednesday 07:00
              </li>
              <li>
                  Sunny
              </li>
          </ul>
          <div className="row">
              <div className="col-6">
                  <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="Clear" id="icon" class="float-left" />
                  6°C
              </div>
              <div className="col-6">
                  <ul>
                      <li>Precipitation: 15% </li>
                      <li>Humidity: 72% </li>
                      <li>Wind: 13km/h </li>
                  </ul>
              </div>
          </div>
        </div>
    )
}