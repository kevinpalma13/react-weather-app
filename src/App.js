import React, { Component } from 'react';
import './App.css';

import WeatherInfo from './components/WeatherInfo';
import WeatherForm from './components/WeatherForm';
import {WEATHER_KEY} from './keys';

class App extends Component {

  state = {
    temp: '',
    desc: '',
    hum: '',
    wind_speed: '',
    city: '',
    country: '',
    error: null
  }

  getWeather = async e => {
    e.preventDefault();
    const { city, country } = e.target.elements;
    const cityVal = city.value;
    const countryVal = country.value;

    if(cityVal && countryVal){
      const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal},${countryVal}&appid=${WEATHER_KEY}&units=metric`;
      const response = await fetch(API_URL); //para usar await declaramos la función como async
      const data = await response.json();

      console.log(data);

      this.setState({
        temp: data.main.temp,
        desc: data.weather[0].description,
        hum: data.main.humidity,
        wind_speed: data.wind.speed,
        city: data.name,
        country: data.sys.country,
        error: null
      })
    }
    else{
      this.setState({
        error: 'Escribe la ciudad y el país!'
      })
    }

  }

  render() {
    return (
      <div className="container p-4"> 
        <div className="row">
          <div className="col-md-6 mx-auto">
            <WeatherForm getWeather={this.getWeather} />
            <WeatherInfo {...this.state} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
