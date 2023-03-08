import { useState, useEffect } from "react";
import { detailsChargerService } from "../services/chargerPoints.services";

function ChargersDetails() {
  const [chargerPointdDetails, setChargerPointDetails] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await detailsChargerService();
    const chargersDetails = response.data;
    console.log("🚀 ChargerDetails:", chargersDetails)
   
    setChargerPointDetails(chargersDetails);

    setIsFetching(false);
  };

  if (isFetching === true) {
    <p>Loading...</p>;
  }

  return (
    <section className="general-content">
    {chargerPointdDetails?.map((eachDetail) => {
      return (
        <div key={eachDetail.id} className="row">
          
            <h5>{eachDetail.charge_point_id}</h5>
            <p>{eachDetail.value}</p>
            <p>{eachDetail.unit}</p>

         
          
        </div>
      );
    })}
  </section>
  )
}

export default ChargersDetails