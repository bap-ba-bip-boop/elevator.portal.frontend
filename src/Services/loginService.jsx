import { postQuery } from "./query.js";

export const loginSecondLine = async (EmployeeId) =>
{
    return await postQuery("/Login", {EmployeeId: EmployeeId});
}