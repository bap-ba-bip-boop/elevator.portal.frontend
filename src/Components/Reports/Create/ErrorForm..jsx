import Box from "@mui/material/Box";
import React from "react";

const ErrorForm = ({breakdownList}) => {
	return (
		<Box component="form" autoComplete="off">
			{breakdownList.map((item) => {
				<Label>item.reason</Label>
				return <span>{item.reason}</span>;
			})
			}
		</Box>
	);
};

export default ErrorForm;