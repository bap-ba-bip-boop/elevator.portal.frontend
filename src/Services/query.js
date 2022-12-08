import { useUserContext } from "../Context/userContext";
//const tempJWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbXBsb3llZUlkIjoiMjVkNGRjZjgtMDcyMy00YjU5LThmNzUtMzUwMDMxMTUyZDk4IiwiZXhwIjoxNjY5OTc2MzE3fQ.e22RL01UOM80iZqfEHRVTX3JkaZlP4U3NVxVyutkX3M"
const BaseURL = "https://localhost:7174/api";//"https://grupp5elevatorapidev.azurewebsites.net/api";

const headersWithJSON = (type, json_body) => {
  const {getActiveToken} = useUserContext();
  const activeToken = getActiveToken();
  return {
    method: type,
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      "Authorization" : `Bearer ${activeToken}`
    },
    body: JSON.stringify(json_body),
  };
};

export const postQuery = async (URL, data) => {
  const API_URL = `${BaseURL}${URL}`;
  const headers = headersWithJSON("POST", data);
  return fetch(API_URL, headers).then((response) => {
    return response.json();
  });
};

export const getQuery = async (URL) => {
  const API_URL = `${BaseURL}${URL}`;
  const headers = headersWithJSON("GET");
  return await fetch(API_URL, headers).then((response) => {
    return response.json();
  });
};
