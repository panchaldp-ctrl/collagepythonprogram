function SensorCard(props) {
  return (
    <div className="card">

      <h2>Sensor Data</h2>

      <p>🌱 Soil Moisture : {props.moisture}%</p>

      <p>🌡 Temperature : {props.temperature}°C</p>

      <p>💧 Humidity : {props.humidity}%</p>

      <p>🌬 Wind Speed : {props.windSpeed} km/h</p>

    </div>
  );
}

export default SensorCard;

