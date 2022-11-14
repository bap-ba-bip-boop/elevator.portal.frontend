import { useQuery } from "@tanstack/react-query";
import { React, useState, useEffect } from "react";
import { GetAllTechnicians } from "../Services/technicianApiService";
import "../Style/ElevatorIndexPanel.css";
import { useParams } from "react-router-dom";

export default function AddTechToErrRepInput() {
  const { ReportId } = useParams(); //this might become a prop later
  console.log("ReportId: " + ReportId);

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

  useEffect(() => {
    console.log("searchTech: " + searchTech);
  }, [searchTech]);

  function renderTechs() {
    if (searchTech === "") return technicans;

    if (searchTech !== "")
      return technicans.filter((tech) => tech.employeeName.toLowerCase().includes(searchTech.toLowerCase()));

    return <>error</>;
  }

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
          {renderTechs().map((tech) => (
            <li>{tech.employeeName}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
