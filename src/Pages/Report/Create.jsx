import {Avatar, Grid, ListItem, ListItemIcon, ListItemText, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import {useQuery} from "@tanstack/react-query";
import React, {useState} from "react";
import {useParams} from "react-router-dom";
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

	const tasks = breakdownTasks.map((task) => {
			return {
				"subject": task.reason,
				"description": "",
				readonly: true
			};
		}
	);

	const [formFields, setFormFields] = useState(tasks);

	const handleFormChange = (event, index) => {
		let data = [...formFields];
		data[index][event.target.name] = event.target.value;
		setFormFields(data);
	};

	const addFields = () => {
		let object = {
			subject: "",
			description: "",
			readonly: false
		};

		setFormFields([...formFields, object]);
	};

	function submit(e) {
		e.preventDefault();
		console.log(formFields)
	}

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
					<Box component="form" paddingX={3} onSubmit={submit}>
						{formFields.map((form, index) =>
							<Box key={index} position={"relative"}>
								<Box border={"1px solid purple"} borderRadius={3} margin={2} paddingX={6}
								     paddingY={4}>
									<Avatar sx={{
										position: "absolute",
										bgcolor: "purple",
										left: -4,
										top: "40%"
									}}>{index + 1}</Avatar>
									{form.readonly === true ?
										<Typography paddingY={2} fontSize={20} textTransform={"uppercase"}
										            sx={{letterSpacing: 1}}>
											{form.subject}
										</Typography> :
										<TextField
											fullWidth
											required
											name={"subject"}
											placeholder={"Subject"}
											margin={"dense"}
											onChange={event => handleFormChange(event, index)}
											defaultValue={form.subject}
										/>}
									<TextField
										fullWidth
										name={"description"}
										placeholder={"Description"}
										margin={"dense"}
										onChange={event => handleFormChange(event, index)}
										defaultValue={form.description}
									/>
								</Box>
							</Box>)
						}
						<Button onClick={addFields}>Test</Button>
						<Button type={"submit"}>Submit</Button>
					</Box>
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

	return <PageContent breakdown={breakdown}/>;
};