import { createServer } from "miragejs";

import countryAndStateData from "../mockData/countryStateData.json";
import randomCityData from "../mockData/randomCityData";

const makeServer = ({ environment = "test" }) =>
  createServer({
    environment,
    routes() {
      this.namespace = "api";

      this.get("/countries", () => countryAndStateData.countries);

      this.get("/vacData", () => randomCityData());

      this.put("/saveVacChanges", (data) => console.log(data));
    },
  });

export default makeServer;
