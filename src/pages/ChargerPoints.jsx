import { useState, useEffect } from "react";
import { listChargersService } from "../services/chargerPoints.services";
import { Link } from "react-router-dom";

function ChargerPoints() {
  const [chargerPointsList, setChargerPointsList] = useState();
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await listChargersService(null);
    const chargersList = response.data;
   
    setChargerPointsList(chargersList);

    setIsFetching(false);
  };

  if (isFetching === true) {
    <p>Loading...</p>;
  }

  return (
    <section>
      {chargerPointsList?.map((eachCP) => {
        return (
          <div key={eachCP.id}>
            <Link to={`/charger/${eachCP.id}/details`}>
              <h3>{eachCP.charge_point_id}</h3>
            </Link>
            <p>STATUS [ {eachCP.status.toUpperCase()} ]</p>
          </div>
        );
      })}
    </section>
  );
}

export default ChargerPoints;
