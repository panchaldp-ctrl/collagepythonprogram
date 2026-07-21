import "./App.css";

import Header from "./components/Header";
import FarmCard from "./components/FarmCard";
import SensorCard from "./components/SensorCard";
import WeatherCard from "./components/WeatherCard";
import PredictionCard from "./components/PredictionCard";
import AdvisoryPanel from "./components/AdvisoryPanel";
import Footer from "./components/Footer";

function App() {

  const farm = {

    farmer: "Purab Thakkar",

    farmId: "SC-1024",

    crop: "Wheat",

    area: "3.5 Acres",

    location: "Jalgaon, Maharashtra, India",

    moisture: 34,

    temperature: 31,

    humidity: 72,

    windSpeed: 18,

    condition: "Partly Cloudy",

    rainfall: 20,

    nextIrrigation: "Tomorrow 7:00 AM",

    duration: "2.5 Hours",

    water: "18 mm",

    stress: "Low (8%)",

    yieldPrediction: "92%",

    advisory:
      "Irrigate tomorrow morning. Rain is expected after 5 PM. Fertigation is recommended after irrigation."

  };

  return (

    <div className="App">

      <Header />

      <div className="grid">

        <FarmCard
          farmer={farm.farmer}
          farmId={farm.farmId}
          crop={farm.crop}
          area={farm.area}
          location={farm.location}
        />

        <SensorCard
          moisture={farm.moisture}
          temperature={farm.temperature}
          humidity={farm.humidity}
          windSpeed={farm.windSpeed}
        />

        <WeatherCard
          condition={farm.condition}
          rainfall={farm.rainfall}
          temperature={farm.temperature}
        />

        <PredictionCard
          nextIrrigation={farm.nextIrrigation}
          duration={farm.duration}
          water={farm.water}
          stress={farm.stress}
          yieldPrediction={farm.yieldPrediction}
        />

        <AdvisoryPanel
          advisory={farm.advisory}
        />

      </div>

      <Footer />

    </div>

  );

}

export default App;