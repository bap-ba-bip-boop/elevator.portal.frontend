import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import { ReportCard } from "../../Components/Reports/ReportCard";
import { useEffect } from "react";

export default function ErrorReportFilter({ Reports }) {
  console.log("reports: ", Reports);
  const allCities = Reports.map((r) => r.building.city);
  const Cities = [...new Set(allCities)];
  const allBuildingIds = Reports.map((r) => r.building.id);
  const buildingIds = [...new Set(allBuildingIds)];
  const compainies = [...new Set(Reports.map((r) => r.building.companyName))];

  const [radioValue, setRadioValue] = React.useState("BuildingId");
  const [filterOptions, setFilterOptions] = React.useState(buildingIds);

  const [searchValue, setSearchValue] = React.useState(filterOptions[0]);
  const [inputValue, setInputValue] = React.useState("");

  const handleChange = (event) => {
    setRadioValue(event.target.value);

    if (event.target.value === "Company") {
      console.log("compainies", compainies);
      setFilterOptions(compainies);
    }
    if (event.target.value === "City") {
      console.log("Cities:", Cities);
      setFilterOptions(Cities);
    }
    if (event.target.value === "BuildingId") {
      console.log("buildingIds:", buildingIds);
      setFilterOptions(buildingIds);
    }
  };

  function filterReports() {
    {
      return Reports.filter((r) => {
        if (radioValue === "BuildingId") {
          return r.building.id.toLowerCase().includes(inputValue.toLowerCase());
        }
        if (radioValue === "Company") {
          console.log("r.companyName", r.building.companyName);
          return r.building.companyName.toLowerCase().includes(inputValue.toLowerCase());
        }
        if (radioValue === "City") {
          return r.building.city.toLowerCase().includes(inputValue.toLowerCase());
        }
      }).map((Report) => <ReportCard key={Report.id} Report={Report} />);
    }
  }

  console.log("InputValue", inputValue);
  return (
    <>
      <div>
        <FormControl>
          <Autocomplete
            inputvalue={searchValue}
            onChange={(event, newValue) => {
              setSearchValue(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            disablePortal
            id="combo-box-demo"
            options={filterOptions}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label={radioValue} />}
          />
          <FormLabel id="demo-row-radio-buttons-group-label">Location filter</FormLabel>
          <RadioGroup row onChange={handleChange} defaultValue={"BuildingId"} name="row-radio-buttons-group">
            <FormControlLabel value="BuildingId" control={<Radio />} label="Building Id" />
            <FormControlLabel value="City" control={<Radio />} label="City" />
            <FormControlLabel value="Company" control={<Radio />} label="Company" />
          </RadioGroup>
        </FormControl>
      </div>
      <div>
        <Stack direction="row" justifyContent={"center"} spacing={2}>
          {filterReports()}
        </Stack>
      </div>
    </>
  );
}
