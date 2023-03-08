import "./App.css";

import { Route, Routes } from "react-router-dom";
import ChargersDetails from "./Components/ChargersDetails";
import ChargerPoints from "./Pages/ChargerPoints";

function App() {
  return (
    <div className="App">
      <Routes>
        {/*  ********* Charger Pages ********/}
        <Route path="/" element={<ChargerPoints />} />
        <Route
          path="/charger/:chargerId/details"
          element={<ChargersDetails />}
        />
      </Routes>
    </div>
  );
}

export default App;
