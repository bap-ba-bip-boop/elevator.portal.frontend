import { getQuery } from "./query";

const technicianApiEndpoints = {
  getTechnician: "https://localhost:7174/api/Employee/d7eeddea-7e7e-45bf-b855-00707f9da0aa",
  getAllTechnicians: "https://localhost:7174/api/Employee",
};

export async function GetTechnician(id) {
  const response = await fetch(`${technicianApiEndpoints.getTechnician}/${id}`).then((response) => response.json());
  return console.log(response);
}

export async function GetAllTechnicians() {
  return getQuery("/employee")
}

export function Test() {
  return console.log("hej");
}
