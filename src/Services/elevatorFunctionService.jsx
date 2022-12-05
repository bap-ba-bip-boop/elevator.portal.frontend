import {postQuery, getQuery} from "./query";

export const MoveToFloor = (ElevatorID, payload) =>{
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