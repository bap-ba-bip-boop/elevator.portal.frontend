import { useState, useEffect } from "react";
import { GetAllTechnicians, PostCurrentTech, GetCurrentTechOnErrorReport } from "../Services/technicianApiService";
import "../Style/ElevatorIndexPanel.css";

export default function AddTechToErrRepInput({ ErrorReport, Technicans }) {
  console.log("Error report " + ErrorReport);
  const { technicianName, id: reportId, assignedTechnician } = ErrorReport;
  const [currentTech, setCurrentTech] = useState({ id: assignedTechnician, name: technicianName });

  function handleInputChange(e) {
    e.preventDefault();
    setsearchTech(e.target.value);
  }

  const [searchTech, setsearchTech] = useState("");

  useEffect(() => {
    console.log("searchTech: " + searchTech);
  }, [searchTech]);

  async function updateCurrentTech(ErrRepId, selectedTechId, selectedTechName) {
    await PostCurrentTech(selectedTechId, ErrRepId).then(
      setCurrentTech({ id: selectedTechId, name: selectedTechName })
    );
  }

  function renderTechs() {
    if (searchTech === "") return Technicans;

    if (searchTech !== "")
      return Technicans.filter((tech) => tech.employeeName.toLowerCase().includes(searchTech.toLowerCase()));

    return (
      <>
        <div>Error</div>
      </>
    );
  }

  return (
    <>
      <div className="ErrorReportSearchContainer">
        <p>
          Current tech name: {currentTech.name} <br />
          Id: {currentTech.id}
        </p>
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
                onClick={(e) => updateCurrentTech(reportId, option.id, option.employeeName)}
                className="searchResults">
                {option.employeeName}
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
