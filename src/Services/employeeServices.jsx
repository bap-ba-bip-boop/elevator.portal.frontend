import {getQuery} from "./query.js";

const getTechnicians = async() => {
    return await getQuery("employee/service");
}

const getSecondLine = async() => {
    return await getQuery("employee/secondline");
}

const getEmployeeById = async(id) => {
    return await getQuery(`employee/${id}`);
}