import React from 'react';

const WeatherForm = props => {
    return (
        <div className="card card-body">
            <form onSubmit={props.getWeather}>
                <div className="form-group">
                    <input type="text" name="city" placeholder="Escribe la ciudad..." className="form-control" autoFocus />
                </div>
                <div className="form-group">
                    <input type="text" name="country" placeholder="Escribe el país..." className="form-control" />
                </div>
                <button className="btn btn-success btn-block">
                    Obtener clima
                </button>
            </form>
        </div>
    )
}

export default WeatherForm;