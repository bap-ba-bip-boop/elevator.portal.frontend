const API_URL = "https://grupp5elevatorapidev.azurewebsites.net/api";

const headersWithJSON = (json_body) => {
    return {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(json_body)
    }
}

export async function ToggleFunctionality(ElevatorID){
    return await fetch(`${API_URL}/Elevator/Method`,
    headersWithJSON({ElevatorId: ElevatorID, FunctionName: 'ToggleFunctionality'}))
    .then((response) => response.json());
}

export async function OpenCloseDoors(ElevatorID){
    return await fetch(`${API_URL}/Elevator/Method`,
    headersWithJSON({ElevatorId: ElevatorID, FunctionName: 'OpenCloseDoor'}))
    .then((response) => response.json());
}

export async function ResetElevators(ElevatorID, ){
    return await fetch(`${API_URL}/Elevator/Method`,
    headersWithJSON({ElevatorId: ElevatorID, FunctionName: 'RemoveMetaData', Payload: '*'}))
    .then((response) => response.json());
}

export async function GetAllElevators(){
    return await fetch(`${API_URL}/elevator`)
        .then((response) => response.json());
}

export async function GetElevatorById(id){
    return await fetch(`${API_URL}/elevator/${id}`).then((response) => response.json());
}