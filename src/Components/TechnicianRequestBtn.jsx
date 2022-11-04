import { sum } from "../Services/technicianApiService";
import { useState, React } from "react";
import { Test, GetTechnician } from "../Services/technicianApiService";
export default function TechnicianRequestBtn() {
  const [technicianId, setTechnicianId] = useState(0);

  function handleChange(event) {
    setTechnicianId(event.target.value);
  }

  return (
    <>
      <input value={technicianId} onChange={handleChange}></input>
      <button onClick={() => GetTechnician(technicianId)}> Request Test</button>
    </>
  );
}
