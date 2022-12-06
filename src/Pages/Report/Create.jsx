import {
	Avatar,
	FormControl,
	Grid,
	IconButton,
	InputLabel,
	ListItem,
	ListItemIcon,
	ListItemText,
	MenuItem,
	Select,
	TextField
} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";

import {DesktopDatePicker} from "@mui/x-date-pickers";
import {useQuery} from "@tanstack/react-query";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import GridItem from "../../Components/Reports/Create/GridItem.jsx";
import {GetBreakdownById} from "../../Services/breakdownServices.jsx";
import {getServiceTech} from "../../Services/employeeServices.jsx";
import {postQuery} from "../../Services/query.js";

const PageContent = ({breakdown}) => {
	const {id, elevatorId, breakdownTasks} = breakdown;
	const [employees, setEmployees] = useState(null);
	const [selectedEmp, setSelectedEmp] = useState("");
	const [deadline, setDeadline] = useState(new Date());
	const [formFields, setFormFields] = useState(breakdownTasks.map((task) => {
		return {
			"taskId": task.id,
			"subject": task.reason,
			"description": "",
			readonly: true
		};
	}));

	useEffect(() => {
		getServiceTech()
			.then(setEmployees);
	}, []);

	const breakdownList = breakdownTasks.map((task, index) =>
		<ListItem key={index}>
			<ListItemIcon sx={{justifyContent: "center"}}><Avatar
				sx={{bgcolor: "purple"}}>{index + 1}</Avatar></ListItemIcon>
			<ListItemText
				sx={{textAlign: "center"}}
				secondary={task.reason}
				secondaryTypographyProps={{variant: "h6", textTransform: "uppercase", letterSpacing: 1}}/>
		</ListItem>);

	const handleChange = (event) => {
		setSelectedEmp(event.target.value);
	};
	const handleFormChange = (event, index) => {
		let data = [...formFields];
		data[index][event.target.name] = event.target.value;
		setFormFields(data);
	};

	const addFields = () => {
		let object = {
			taskId: "",
			subject: "",
			description: "",
			readonly: false
		};
		setFormFields([...formFields, object]);
	};

	const removeField = (index) => {
		let data = [...formFields];
		data.splice(index, 1);
		setFormFields(data);
	};

	function submit(e) {
		e.preventDefault();
		const postObject = {
			"breakdownId":id,
			"elevator": elevatorId,
			"assignedTechnician": selectedEmp,
			"deadline": deadline,
			"rows": formFields.map(field => {
				return {
					"reportSubject": field.subject,
					"reportComment": field.description,
					"breakDownTaskId": field.taskId ?  field.taskId : undefined
				};
			})
		};
		console.log(postObject)
		postQuery("/ErrorReport", postObject)
			.then(console.log);
	}

	const IndexAvatar = ({children}) => <Avatar sx={{
		position: "absolute",
		bgcolor: "purple",
		top: "43%",
		left: -4
	}}>{children}</Avatar>;

	const PostRemoveButton = ({index}) => <IconButton
		onClick={(e) => removeField(index)}><Avatar
		sx={{
			":hover": {
				bgcolor: "#be0000"
			}, bgcolor: "red"
		}}>-</Avatar></IconButton>;

	const PostAddButton = ({index}) => <IconButton
		onClick={addFields}><Avatar
		sx={{
			":hover": {
				bgcolor: "darkgreen"
			}, bgcolor: "green"
		}}>+</Avatar></IconButton>;


	const submitPosition = {
		position: "absolute",
		bottom: -48,
		left: "44%",
		backgroundColor: "white"
	};

	const addButtonPosition = {
		position: "absolute",
		bottom: -28,
		left: "45%"
	};

	const removeButtonPosition = {
		position: "absolute",
		top: "40%",
		right: -12
	};

	const handleDeadline = (newValue) => {
		setDeadline(newValue);
	};

	return (
		<form onSubmit={submit}>
			<Typography variant={"h2"} marginY={5} textAlign={"center"}>Create Report</Typography>
			<Grid container spacing={1}>
				<Grid item>
					<GridItem header={"Causes"}>
						<List>
							{breakdownList}
						</List>
					</GridItem>
					<GridItem header={"Deadline"}>
						<Box display={"flex"} justifyContent={"center"}>
							<DesktopDatePicker
								value={deadline}
								onChange={handleDeadline}
								renderInput={(params) => <TextField {...params}/>}
								disablePast
								date={deadline}
								rawValue={deadline}
							/>
						</Box>
					</GridItem>

					<GridItem header={"Technician"}>
						<Box maxWidth={"75%"} margin={"auto"}>
							<FormControl fullWidth required>
								<InputLabel id="demo-simple-select-label">Technician</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									value={selectedEmp}
									label="Employee"
									onChange={handleChange}
								>
									{
										employees?.map(item => <MenuItem
											key={item.id}
											value={item.id}>{item.employeeName} ({item.companyName})</MenuItem>)
									}
								</Select>
							</FormControl>
						</Box>
					</GridItem>
				</Grid>
				<GridItem width header={"Task-List"}>
					<Box position={"relative"} padding={3}>
						{
							formFields.map((field, index) =>
								<Box key={index} position={"relative"}>
									<Box border={"1px solid purple"} borderRadius={3} margin={2} padding={6}>
										<IndexAvatar>{index + 1}</IndexAvatar>
										{field.readonly === true ?
											<Typography paddingY={2} fontSize={20} textTransform={"uppercase"}
											            sx={{letterSpacing: 1}}>
												{field.subject}
											</Typography> :
											<TextField
												fullWidth
												required
												name={"subject"}
												placeholder={"Subject"}
												margin={"normal"}
												onChange={event => handleFormChange(event, index)}
												value={field.subject}
											/>}
										<TextField
											fullWidth
											name={"description"}
											placeholder={"Description"}
											margin={"normal"}
											onChange={event => handleFormChange(event, index)}
											value={field.description}
										/>
										{
											field.id && <input type={"hidden"} name="id" value={field.id}/>
										}
										{
											!field.readonly && <Box sx={removeButtonPosition}>
												<PostRemoveButton index={index}/>
											</Box>
										}
										{formFields[formFields.length - 1] === field &&
											<Box sx={addButtonPosition}>
												<PostAddButton/>
											</Box>
										}
									</Box>
								</Box>
							)}
						<Box sx={submitPosition}>
							<Button variant={"contained"} sx={{paddingX: 2, paddingY: 1}} color={"secondary"}
							        type={"submit"}>Submit</Button>
						</Box>
					</Box>
				</GridItem>
			</Grid>
		</form>
	);

};

export const CreatePage = () => {
		const {breakdownId} = useParams();

		const {isLoading, error, data: breakdown} = useQuery({
			queryKey: ["breakdown", breakdownId],
			queryFn: () => GetBreakdownById(breakdownId)
		});

		if (isLoading) {
			return <p>Loading...</p>;
		}

		if (error) {
			return <p>Error!</p>;
		}

		return <PageContent breakdown={breakdown}/>;
	}
;