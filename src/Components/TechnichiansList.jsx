import { React, useState, useEffect } from "react";
import { GetAllTechnicians } from "../Services/technicianApiService";

export default function TechnichiansList() {
  const [technicians, setTechnicians] = useState([]);

  useEffect(() => {
    GetAllTechnicians()
      .then(console.log(technicians))
      .then((data) => setTechnicians(data));
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
