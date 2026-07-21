function FarmCard(props) {
  return (
    <div className="card">
      <h2>Farmer Details</h2>

      <p><b>Farmer:</b> {props.farmer}</p>

      <p><b>Farm ID:</b> {props.farmId}</p>

      <p><b>Crop:</b> {props.crop}</p>

      <p><b>Area:</b> {props.area}</p>

      <p><b>Location:</b> {props.location}</p>
    </div>
  );
}

export default FarmCard;