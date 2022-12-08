import { React, useState, useEffect } from "react";
import { GetAllTechnicians } from "../../Services/technicianApiService.jsx";
import "../../Style/ElevatorIndexPanel.css";

  const [searchTech, setsearchTech] = useState("");

  useEffect(() => {
    console.log("searchTech: " + searchTech);
  }, [searchTech]);

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
          Current tech name: {technicianName} <br />
          Id: {assignedTechnician}
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
                onClick={async () => {
                  await PostCurrentTech(option.id, id);
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
