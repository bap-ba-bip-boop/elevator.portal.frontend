import {Avatar, Grid, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import {useQuery} from "@tanstack/react-query";
import React from "react";
import {useParams} from "react-router-dom";
import ErrorForm from "../../Components/Reports/Create/ErrorForm..jsx";
import GridItem from "../../Components/Reports/Create/GridItem.jsx";
import {GetBreakdownById} from "../../Services/breakdownServices.jsx";

export const Create = () => {
	const {breakdownId} = useParams();

	const {isLoading, error, data: breakdown} = useQuery({
		queryKey: ["elevators", breakdownId],
		queryFn: () => GetBreakdownById(breakdownId)
	});

	if (isLoading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>Error!</p>;
	}

	const {breakdownTasks} = breakdown;

	const breakdownList = breakdownTasks.map((task, index) =>
		<ListItem>
			<ListItemIcon sx={{justifyContent: "center"}}><Avatar
				sx={{bgcolor: "purple"}}>{index + 1}</Avatar></ListItemIcon>
			<ListItemText
				sx={{textAlign: "center"}}
				secondary={task.reason}
				secondaryTypographyProps={{variant: "h6", textTransform: "uppercase", letterSpacing: 1}}/>
		</ListItem>);

	return (
		<>
			<Typography variant={"h2"} marginLeft={3} marginBottom={5}>Create Report</Typography>
			<Grid container spacing={1}>
				<GridItem header={"Causes"}>
					<List>
						{breakdownList}
					</List>
				</GridItem>
				<GridItem width={7} header={"Task-List"}>
					<ErrorForm breakdownList={breakdownTasks}/>
				</GridItem>
			</Grid>
		</>
	);

};