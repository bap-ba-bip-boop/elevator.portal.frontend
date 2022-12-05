import { postQuery } from "./query.js";

export const loginSecondLine = async (EmployeeId) =>
{
    const response = await postQuery("/Login", {EmployeeId: EmployeeId});
    console.log("login response: ", response)
    return response;
}