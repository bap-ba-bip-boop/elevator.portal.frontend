// const API_URL = "https://grupp5elevatorapidev.azurewebsites.net/api";

 const API_URL = "https://localhost:7174/api";



export async function GetErrorReportById(id){
    return await fetch(`${API_URL}/errorreport/${id}`).then((response) => response.json());
}