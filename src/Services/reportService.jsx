import { postQuery, getQuery } from "./query";

export const GetAllErrorReports = () => {
  return getQuery("/ErrorReport");
};

export const GetErrorReportById = (id) => {
  return getQuery(`/ErrorReport/${id}`);
};
export const GetCompany = (id) => {
  return getQuery(`/Company/${id}`);
};

export const GetAllCompanies = () => {
  return getQuery(`/Company/All`);
};
