import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function ErrorReportFilter() {
  const cities = [{ label: "Stockholm" }, { label: "The Godfather", year: 1972 }];

  return (
    <>
      <div>
        <FormControl>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={cities}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="City" />}
          />{" "}
          <FormLabel id="demo-row-radio-buttons-group-label">Location filter</FormLabel>
          <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
            <FormControlLabel value="All" control={<Radio />} label="Female" />
            <FormControlLabel value="City" control={<Radio />} label="Male" />
          </RadioGroup>
        </FormControl>
      </div>
    </>
  );
}
