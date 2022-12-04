import {Avatar, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React, {useCallback, useState} from "react";

const SubjectLabel = ({subject}) =>
	<Typography paddingY={2} fontSize={24} textTransform={"uppercase"} sx={{letterSpacing: 1}}>
		{subject}
	</Typography>;

const ErrorForm = ({breakdownTasks}) => {
	const [formValues, setFormValues] = useState(breakdownTasks);

	const addRow = async () => {
		const newField = {subject: "", comment: "", readonly: false};
		setFormValues((prevValues) => [...prevValues, newField]);
	};

	const onChange = useCallback(async (e) => {
		const items = formValues.map(value => {
			if(value.id.toString() === e.target.id){
				return {...value, text: e.target.value};
			} else {
				return formValues;
			}
		});
		setFormValues(items);
	}, []); // No dependencies


	const SideBadge = ({children}) => <Avatar
		sx={{position: "absolute", bgcolor: "purple", left: -4, top: "40%"}}>{children}</Avatar>;

	const FormBorder = ({children}) => <Box border={"1px solid purple"} borderRadius={3} margin={2} paddingX={6}
	                                        paddingY={4}>{children}</Box>;

	return (
		<Box component="form" autoComplete="off" paddingX={3}>
			{formValues.map((item, index) =>
				<Box key={index} position={"relative"}>
					<FormBorder>
						<SideBadge>{index + 1}</SideBadge>
						<TextField
							fullWidth
							required
							id={index.toString()}
							name={"subject"}
							label={"Subject"}
							margin={"dense"}
							onChange={onChange}
							value={item.subject}
						/>
						<TextField
							fullWidth
							id={index.toString()}
							name={"text"}
							label={"Description"}
							onChange={onChange}
							margin={"dense"}
							value={item.text}
						/>
					</FormBorder>
				</Box>
			)
			}
			<Button onClick={addRow}>Test</Button>
		</Box>
	);
};

export default ErrorForm;