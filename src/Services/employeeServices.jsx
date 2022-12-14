import { getQuery } from "./query.js";

export const getServiceTech = async () => {
  return await getQuery("/employee/service");
};

export const getSecondLine = async () => {
  return await getQuery("/employee/secondline");
};

export const getEmployeeById = async (id) => {
  return await getQuery(`/employee/${id}`);
};
