import { React, useState, useEffect } from "react";
import { GetAllTechnicians } from "../../Services/technicianApiService.jsx";

export default function TechniciansList() {
  const [technicians, setTechnicians] = useState([]);

  useEffect(() => {
    GetAllTechnicians().then((response) => {
      setTechnicians(response);
      console.log(response);
    });
  }, []);
  if (!technicians) return <div>Loading...</div>;

  return (
    <>
      <div>
        <select>
          <option selected disabled hidden>
            Choose technician
          </option>
          {technicians.map((option) => (
            <option key={option.id} value={option.employeeName}>
              {option.employeeName}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
