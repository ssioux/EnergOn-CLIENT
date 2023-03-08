import service from "./config.services";

// http://localhost:5005/api baseUrl

const listChargersService = () => {
  return service.get("/chargers");
};

const detailsChargerService = (chargerId) => {
  return service.get(`/chargers/details`);
};

export { listChargersService, detailsChargerService };
