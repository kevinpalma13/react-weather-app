import React from 'react';

const WeatherInfo = props => {



    return (

        <div>
            {
                props.error && 
                <div className="alert alert-danger"><p>{props.error}</p></div>
            }
            {
                props.temp &&
                <div className="card card-body">
                    <p>Location: {props.city}, {props.country}</p>
                    <p>Temperature: {props.temp} ºC, {props.desc}</p>
                    <p>Humidity: {props.hum}</p>
                    <p>Wind Speed: {props.wind_speed}</p>
                </div>
                
            } 
        </div>

        
    )
}

export default WeatherInfo;