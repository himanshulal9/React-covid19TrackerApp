import { baseUrl } from "./baseUrl";
import http from "./httpsRequest";

//getting Global sumary
export const GetAllSummary = () => {
  return http.get(`${baseUrl}/summary`);
};
//getting india all details
export const GetIndiaActiveCases = () => {
  return http.get(`https://api.covid19india.org/data.json`);
};
