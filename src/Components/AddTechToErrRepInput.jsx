import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { GetAllTechnicians, PostCurrentTech, GetCurrentTechOnErrorReport } from "../Services/technicianApiService";
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

  const {
    isFetching: currentTechLoading,
    error: currentTechError,
    data: currentTechData,
    refetch: refetchCurrentTech,
  } = useQuery({
    queryKey: ["currentTech"],
    queryFn: () => GetCurrentTechOnErrorReport(ReportId),
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

  function renderCurrentTechName() {
    if (currentTechLoading) return <span>Loading...</span>;
    if (currentTechError) return <span>ERROR TERROR</span>;

    return <span>{currentTechData}</span>;
  }

  return (
    <>
      <div className="ElevatorIndexPanelContainer">
        <p>Current tech name:{renderCurrentTechName()}</p>
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
          {renderTechs()
            .slice(0, 5)
            .map((option) => (
              <li
                key={option.id}
                onClick={async () => {
                  await PostCurrentTech(option.id, ReportId);
                  refetchCurrentTech();
                }}
                className="searchResults">
                {option.employeeName}
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
