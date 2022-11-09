
const BaseURL = "https://localhost:7174/api/";

const headersWithJSON = (type, json_body) => {
    return {
        method: type,
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(json_body)
        }
}

export const postQuery = async (URL, data) => {
    const API_URL = `${BaseURL}${URL}`;
    const bog = headersWithJSON('POST', data);
    console.log(bog);
    return fetch(API_URL, bog)
        .then((response) => response.json());
}

export const getQuery = async (URL) => {
    const API_URL = `${BaseURL}${URL}`;
    return fetch(API_URL)
        .then((response) => response.json());
}