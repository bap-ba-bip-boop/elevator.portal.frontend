import {postQuery, getQuery} from "./query";

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

export const UpdateMetaData = (ElevatorID, payload) => {
    return postQuery('/Elevator/Method',{ElevatorId: ElevatorID, FunctionName: 'UpdateMeta', payload: payload});
}

export const MoveToFloor = (ElevatorID, payload) => {
    return postQuery('/Elevator/Method',{ElevatorId: ElevatorID, FunctionName: 'MoveToFloor', payload: payload});
}

export const ToggleFunctionality = (ElevatorID) => {
    return postQuery('/Elevator/Method', {ElevatorId: ElevatorID, FunctionName: 'ToggleFunctionality'});
}

export const OpenCloseDoors = (ElevatorID) =>{
    return postQuery('/Elevator/Method',{ElevatorId: ElevatorID, FunctionName: 'OpenCloseDoor'});
}

export const ResetElevators = (ElevatorID, payload) => {
    return postQuery('/Elevator/Method', {ElevatorId: ElevatorID, FunctionName: 'RemoveMetaData', payload: payload});
}

export const GetAllElevators = () => {
    return getQuery('/Elevator');
}

export const GetElevatorById = (id) =>{
    return getQuery(`/Elevator/${id}`);
}