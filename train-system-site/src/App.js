import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import TrainSchedule from "./TrainSchedule";
import TrainDetails from "./TrainDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<TrainSchedule />} />
          <Route path="/train-details" element={<TrainDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;