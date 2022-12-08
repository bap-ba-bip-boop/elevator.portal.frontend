const BaseURL = "https://grupp5elevatorapidev.azurewebsites.net/api";
const headersWithJSON = (type, json_body) => {
  return {
    method: type,
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
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
  return await fetch(API_URL).then((response) => {
    return response.json();
  });
};
