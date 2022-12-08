import { getQuery } from "./query.js";

export const GetBreakdownById = async (id) => {
  return await getQuery(`/breakdown/${id}`);
};