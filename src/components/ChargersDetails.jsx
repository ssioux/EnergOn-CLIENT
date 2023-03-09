// React Hooks
import { useState, useEffect } from "react";
// Services to DB
import { detailsChargerService } from "../services/chargerPoints.services";
// Graphics imported
import BarChart from "./charts/BarChart";

function ChargersDetails() {
  const [chargerPointdDetails, setChargerPointDetails] = useState(null);

  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await detailsChargerService();
    const details = response.data;

    setChargerPointDetails(details);
    setIsFetching(false);
  };

  if (isFetching === true) {
    <p>Loading...</p>;
  }

  return (
    <section className="general-content">
      <div className="graph-size">
        <BarChart
          chartData={{
            labels: chargerPointdDetails?.map((data) => data.timestamp),
            datasets: [
              {
                label: "value",
                data: chargerPointdDetails?.map((data) => data.value),
              },
            ],
          }}
        />
      </div>
    </section>
  );
}

export default ChargersDetails;
