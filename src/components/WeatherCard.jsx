function WeatherCard(props) {

  return (

    <div className="card">

      <h2>Weather Forecast</h2>

      <p>Condition : {props.condition}</p>

      <p>Rainfall Chance : {props.rainfall}%</p>

      <p>Temperature : {props.temperature}°C</p>

    </div>

  );

}

export default WeatherCard;