import { postQuery, getQuery } from "./query";

export const GetAllErrorReports = () => {
  return getQuery("/ErrorReport");
};

export const GetErrorReportById = (id) => {
  return getQuery(`/ErrorReport/${id}`);
};
