function PredictionCard(props) {

  return (

    <div className="card">

      <h2>AI Prediction</h2>

      <p>Next Irrigation : {props.nextIrrigation}</p>

      <p>Duration : {props.duration}</p>

      <p>Water Requirement : {props.water}</p>

      <p>Water Stress : {props.stress}</p>

      <p>Yield Prediction : {props.yieldPrediction}</p>

    </div>

  );

}

export default PredictionCard;