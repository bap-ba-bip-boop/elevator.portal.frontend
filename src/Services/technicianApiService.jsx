import { getQuery, postQuery } from "./query";

export async function GetTechnician(id) {
  return getQuery("/Employee/" + id);
}

export async function GetAllTechnicians() {
  return getQuery("/Employee");
}

export async function GetCurrentTechOnErrorReport(reportId) {
  return getQuery("/ErrorReport/getTechName?errorReportId=" + reportId);
}

export async function PostCurrentTech(techId, reportId) {
  return postQuery("/ErrorReport/AssignTechnican", {
    technicianId: techId,
    errorReportId: reportId,
  });
}
