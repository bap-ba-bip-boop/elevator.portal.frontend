import {getQuery} from "./query";

export const getLogs = (elevatorId, amountToTake, pageNumber) => {
    return getQuery(`/ElevatorLog?ElevatorId=${elevatorId}&amountToTake=${amountToTake}&pageNumber=${pageNumber}`);
}