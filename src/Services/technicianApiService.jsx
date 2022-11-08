const technicianApiEndpoints = {
  getTechnician: "https://b933de4e-6346-4fef-a4b1-aa5ab09b24d7.mock.pstmn.io",
};

export async function GetTechnician(id) {
  const response = await fetch(`${technicianApiEndpoints.getTechnician}/${id}`).then((response) => response.json());

  return console.log(response);
}

export function Test() {
  return console.log("hej");
}
