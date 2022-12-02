const tempJWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbXBsb3llZUlkIjoiMjVkNGRjZjgtMDcyMy00YjU5LThmNzUtMzUwMDMxMTUyZDk4IiwiZXhwIjoxNjY5OTc2MzE3fQ.e22RL01UOM80iZqfEHRVTX3JkaZlP4U3NVxVyutkX3M"
const BaseURL = "https://localhost:7174/api";//"https://grupp5elevatorapidev.azurewebsites.net/api";
const headersWithJSON = (type, json_body) => {
  return {
    method: type,
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      "Authorization" : `Bearer ${tempJWT}`
    },
    body: JSON.stringify(json_body),
  };
};

const headersWithJSON2 = (type, json_body = null) => {

  let items = {
    method: type,
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      "Authorization" : `Bearer ${tempJWT}`
    }
  };

  return items
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
  const headers = headersWithJSON2("GET");
  return await fetch(API_URL, headers).then((response) => {
    return response.json();
  });
};
