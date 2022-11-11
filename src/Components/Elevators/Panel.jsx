import React from "react";
import "../../Style/ElevatorIndexPanel.css";
import { Link } from "react-router-dom";
import ActionPanel from "./ActionPanel";
import { useEffect } from "react";

<<<<<<< HEAD
export const Panel = ({ Elevator, DaysLeft }) => {
  useEffect(() => {
    return () => {
      console.log(Elevator);
    };
  }, []);
=======
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ReportDetails } from '../Reports/ReportDetails';

export const Panel = ({Elevator, DaysLeft}) => {

    useEffect(() => {
        return () => {
            console.log(Elevator);
        };
    }, []);

    const {errorReport, buildingId, buildingName, Name, deadline} = Elevator;
>>>>>>> 978852672a4ce88baeef433f746e9cbfd1b0c113

  const { errorReport, buildingId, buildingName, Name, deadline } = Elevator;

  const setBackground = (timeLeft) => {
    if (ErrorStatus === "Ok") {
      return {};
    }
    if (timeLeft > 7) {
      return {};
    } else if (timeLeft > 3) {
      return {
        backgroundColor: "yellow",
      };
    } else {
      return {
        backgroundColor: "red",
      };
    }
  };

<<<<<<< HEAD
  return (
    <div className="ElevatorIndexPanelContainer">
      <ActionPanel Elevator={Elevator} />
    </div>
  );
};
=======
    console.log(Elevator)

    return (
      <Card sx={{ minWidth: 275}}>
      <CardContent>
        <Typography>
          <Link color='primary' to={"Building/"+Elevator.buildingId}>{Elevator.buildingName}</Link>
        </Typography>
        <Typography variant="h5" component="">
          {Elevator.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.primary">
          Status: {Elevator.errorReport ? <ReportDetails ErrorReport={Elevator.errorReport}/> : "Ok"}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={"Elevator/"+Elevator.id}>Show Elevator</Link>
      </CardActions>
    </Card>
    )
}
/*
<div className='ElevatorIndexPanelContainer' style={setBackground(DaysLeft)}>
        <Link to={"Building/"+Elevator.buildingId}>{Elevator.buildingName}</Link>
        <p>{Elevator.Name}</p>
        <span>Status: </span>
        {Elevator.ErrorStatus !== "Ok" ? <Link to={"Report/"+Elevator.ErrorReportId}>{Elevator.ErrorStatus}</Link> : <span>{Elevator.ErrorStatus}</span>}
        <p>DeadLine: {Elevator.DeadLine}</p>
        <p>DaysLeft: {DaysLeft}</p>
        <Link to={"Elevator/"+Elevator.id}>Show Elevator</Link>
      </div>
*/
>>>>>>> 978852672a4ce88baeef433f746e9cbfd1b0c113
