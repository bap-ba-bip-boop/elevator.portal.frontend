import {getQuery, postQuery} from "./query.js";

export async function ToggleFunctionality(ElevatorID) {
    return await postQuery('Elevator/Method',
        {ElevatorId: `${ElevatorID}`, FunctionName: 'ToggleFunctionality'}
    );
}

export async function GetAllElevators() {
    return await getQuery(`elevator`);
}

export async function GetElevatorById(id) {
    return await getQuery(`elevator/${id}`);
}