import {Avatar, Grid, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import {useQuery} from "@tanstack/react-query";
import React, {useState} from "react";
import {useParams} from "react-router-dom";
import ErrorForm from "../../Components/Reports/Create/ErrorForm..jsx";
import GridItem from "../../Components/Reports/Create/GridItem.jsx";
import {GetBreakdownById} from "../../Services/breakdownServices.jsx";

const PageContent = ({breakdown}) => {
	const {breakdownTasks} = breakdown;
	const breakdownList = breakdownTasks.map((task, index) =>
		<ListItem key={index}>
			<ListItemIcon sx={{justifyContent: "center"}}><Avatar
				sx={{bgcolor: "purple"}}>{index + 1}</Avatar></ListItemIcon>
			<ListItemText
				sx={{textAlign: "center"}}
				secondary={task.reason}
				secondaryTypographyProps={{variant: "h6", textTransform: "uppercase", letterSpacing: 1}}/>
		</ListItem>);
	const tasks = breakdownTasks.map((task, index) => {
			return {
				'id': index,
				'subject': task.reason,
				"text": ""
			};
		}
	);
	return (
		<>
			<Typography variant={"h2"} marginLeft={3} marginBottom={5}>Create Report</Typography>
			<Grid container spacing={1}>
				<GridItem header={"Causes"}>
					<List>
						{breakdownList}
					</List>
				</GridItem>
				<GridItem width header={"Task-List"}>
					<ErrorForm breakdownTasks={tasks}/>
				</GridItem>
			</Grid>
		</>
	);

};

export const CreatePage = () => {
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

	return <PageContent breakdown={breakdown}/>
};