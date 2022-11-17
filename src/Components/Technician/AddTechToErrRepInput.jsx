import { React, useState, useEffect } from "react";
import { GetAllTechnicians } from "../../Services/technicianApiService.jsx";
import "../../Style/ElevatorIndexPanel.css";

export default function AddTechToErrRepInput(props) {
  const [technicians, setTechnicians] = useState([]);
  const [searchInput, setSearchInput] = useState();
  const [searchResults, setSearchResults] = useState([]);
  const [selectedTech, setSelectedTech] = useState();

  useEffect(() => {
    GetAllTechnicians().then((response) => {
      setTechnicians(response);
      console.log(response);
      console.log(searchResults);
    });
  }, []);
  if (!technicians) return <div>Loading...</div>;

  useEffect(() => {
    setSearchResults(
      searchInput === ""
        ? technicians
        : technicians.filter((tech) => tech.employeeName.toLowerCase().includes(searchInput.toLowerCase()))
    );
  }, [searchInput]);

  function handleSelectedTech(selectedId) {
    setSelectedTech(selectedId);
    console.log(selectedTech);

    /*     const result = fetch("https://localhost:7174/api/ErrorReport/technichianId", {
      method: "POST",
      body: {
        errorReportId: {props.errorReportId},
        technicianId: {selectedId},
      },
    });
    console.log(result); */
  }

  return (
    <>
      <div className="ErrorReportSearchContainer">
        <input
          onClick={() => setSearchInput("")}
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
          placeholder="Search for a technician"
          type="search"
          id="technician-search"
          name="technician-search"
        />
        <ul>
          {searchResults.slice(0, 3).map((option) => (
            <li key={option.id} onClick={() => handleSelectedTech(option.id)} className="searchResults">
              {option.employeeName}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
