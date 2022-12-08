import {Label} from "@mui/icons-material";
import {Avatar, Grid, ListItem, ListItemIcon, ListItemText, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import {DesktopDatePicker} from "@mui/x-date-pickers";
import {useQuery} from "@tanstack/react-query";
import React from "react";
import {useParams} from "react-router-dom";
import GridItem from "../../Components/Reports/Create/GridItem.jsx";
import {GetErrorReportById} from "../../Services/reportService.jsx";

const PageContent = ({errorReport}) => {

	const {technicianName, deadline, rows} = errorReport;
	const IndexAvatar = ({children}) => <Avatar sx={{
		position: "absolute",
		bgcolor: "purple",
		top: "43%",
		left: -4
	}}>{children}</Avatar>;
	return (
		<>
			<Typography variant={"h2"} marginY={5} textAlign={"center"}>View Report</Typography>
			<Grid container spacing={1}>
				<Grid item>
					<GridItem header={"Deadline"}>
						<Box display={"flex"} justifyContent={"center"}>
							<Typography>{deadline.split("T")[0]}</Typography>

						</Box>
					</GridItem>
					<GridItem header={"Technician"}>
						<Box maxWidth={"75%"} margin={"auto"}>
							<Typography>{technicianName}</Typography>
						</Box>
					</GridItem>
				</Grid>
				<GridItem width header={"Task-List"}>
					<Box position={"relative"} padding={3}>
						{
							rows.map((field, index) =>
								<Box key={index} position={"relative"}>
									<Box border={"1px solid purple"} borderRadius={3} margin={2} padding={6}>
										<IndexAvatar>{index + 1}</IndexAvatar>
										{field.readonly === true ?
											<Typography paddingY={2} fontSize={20} textTransform={"uppercase"}
											            sx={{letterSpacing: 1}}>
												{field.subject}
											</Typography> :
											<Typography>{field.reportSubject}</Typography>}
										<Typography>{field.reportDescription}</Typography>
									</Box>
								</Box>
							)}
					</Box>
				</GridItem>
			</Grid>
		</>
	);

};

export const ViewPage = () => {
		const {ReportId} = useParams();

		const {isLoading, error, data: report} = useQuery({
			queryKey: ["errorReport", ReportId],
			queryFn: () => GetErrorReportById(ReportId)
		});

		if (isLoading) {
			return <p>Loading...</p>;
		}

		if (error) {
			return <p>Error!</p>;
		}

		return <PageContent errorReport={report}/>;
	}
;