import { useQuery } from "@tanstack/react-query";
import { React, useState, useEffect } from "react";
import { GetAllTechnicians } from "../Services/technicianApiService";
import "../Style/ElevatorIndexPanel.css";
import { useParams } from "react-router-dom";

export default function AddTechToErrRepInput() {
  const { ReportId } = useParams(); //this might become a prop later
  console.log("ReportId: " + ReportId);

  function handleSelectedTech(selectedId) {
    setCurrentTech(technicians.find((tech) => tech.id === selectedId).employeeName);
    setSelectedTech(selectedId);
    console.log(selectedTech);

    const errorReport = {
      errorReportId: reportId,
      technicianId: selectedId,
    };

    return (
      <>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem unde vitae dignissimos earum. Consequuntur
          natus accusantium error commodi rem tenetur.
        </p>
      </>
    );
  }
  function handleInputChange(e) {
    e.preventDefault();
    setsearchTech(e.target.value);
  }

  const [searchTech, setsearchTech] = useState("");
  const {
    isLoading,
    error,
    data: technicans,
  } = useQuery({
    queryKey: ["technicians"],
    queryFn: GetAllTechnicians,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something has happened...</div>;

  return (
    <>
      <div className="ElevatorIndexPanelContainer">
        <p>Current tech name:</p>
        <div>
          <input
            value={searchTech}
            onChange={(e) => handleInputChange(e)}
            placeholder="Search for a technican"
            type="search"
            name="seachName"
            id="searchName"
          />
        </div>
        <ul>
          {technicans.map((tech) => (
            <li>{tech.employeeName}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
