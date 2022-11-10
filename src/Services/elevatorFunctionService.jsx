const API_URL = "https://localhost:7174/api";
var headersWithJSON = (json_body) => {
    const data = {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(json_body)
    }
    return data;
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

export async function GetAllElevators(){
    return await fetch(`${API_URL}/elevator`).then((response) => response.json());
}

export async function GetElevatorById(id){
    return await fetch(`${API_URL}/elevator/${id}`).then((response) => response.json());
}