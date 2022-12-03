import {Grid} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const radiusValue = 3;
const GridItem = ({header, width:xs, children}) =>
	<Grid item xs={xs?xs:"auto"} margin>
		<Box padding
		     bgcolor={"purple"}
		     boxShadow={5}
		     borderRadius={radiusValue}
		>
			<Typography textAlign={"center"} component={"h1"} fontSize={40} paddingBottom={2}
			            color={"white"}>{header}</Typography>
			<Box bgcolor={"white"} borderRadius={radiusValue} paddingY={3} paddingX>
				{children}
			</Box>
		</Box>
	</Grid>;

export default GridItem;