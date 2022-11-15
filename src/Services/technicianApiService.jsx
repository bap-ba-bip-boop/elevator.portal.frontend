const technicianApiEndpoints = {
  getTechnician: "https://localhost:7174/api/Employee/d7eeddea-7e7e-45bf-b855-00707f9da0aa",
  getAllTechnicians: "https://localhost:7174/api/Employee",
  GetCurrentTechOnErrorReport: "https://localhost:7174/api/ErrorReport/getTechName?errorReportId=",
};

export async function GetTechnician(id) {
  const response = await fetch(`${technicianApiEndpoints.getTechnician}/${id}`).then((response) => response.json());
  return console.log(response);
}

export async function GetAllTechnicians() {
  const response = await fetch(`${technicianApiEndpoints.getAllTechnicians}`).then((response) => response.json());
  return response;
}

export async function GetCurrentTechOnErrorReport(reportId) {
  console.log("reportId in service: " + reportId);
  console.log(`${technicianApiEndpoints.GetCurrentTechOnErrorReport + reportId}`);

  const response = await fetch(`${technicianApiEndpoints.GetCurrentTechOnErrorReport + reportId}`).then((response) =>
    response.json()
  );

  return response;
}

export async function PostCurrentTech(techId, reportId) {
  const response = await fetch(`${technicianApiEndpoints.getAllTechnicians + { id }}`, {
    method: "POST",
    body: JSON.stringify({ errorReportId: reportId, technicianId: techId }),
  }).then((response) => response.json());
  return response;
}

export function Test() {
  return console.log("hej");
}
