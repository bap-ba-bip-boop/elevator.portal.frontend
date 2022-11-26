import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";
import {DataGrid} from "@mui/x-data-grid";
import {useCallback, useEffect, useState} from "react";
import {useElevatorContext} from "../../../Context/ElevatorContext.jsx";

const MetaTable = ({metaData, header, editable = true, hasCheckbox = false}) => {
    const {setSelectionValues} = useElevatorContext();
    const [selectionModel, setSelectionModel] = useState([]);
    const [rows, setRows] = useState([]);
    useEffect(() => {
        let values = [];
        for (const [key, value] of Object.entries(metaData)) {
            values.push({"id": key, "key": key, "value": value});
        }
        setRows(values);
    }, [metaData]);

    const columns = [
        {field: "key", headerName: "Key", flex: 1, editable: false},
        {field: "value", headerName: "Value", flex: 1, editable: editable}
    ];

    const handleEdit = useCallback(async (newRow) => {

        return {...newRow, isNew: false};
    }, [rows]);

    const handleProcessRowUpdateError = useCallback(
        (error) => {
            console.log(error);
        }, []);

    const updateAmount = (selection) => {
        setSelectionModel(selection);
        setSelectionValues(selection);
    }
    const disabledKeys = ['CurrentFloor', 'DoorsAreOpen'];

    return (
        <Box flex={1} flexGrow={1} marginBottom={5} minWidth={"25em"}>
            <Typography variant={"h5"} marginBottom={1}>{header}</Typography>
            <DataGrid
                isRowSelectable={(params) => !disabledKeys.includes(params.row.key)}
                checkboxSelection={hasCheckbox}
                rows={rows}
                columns={columns}
                disableSelectionOnClick={true}
                onSelectionModelChange={
                    (newModel) => {
                        updateAmount(newModel);
                    }
                }
                processRowUpdate={handleEdit}
                onProcessRowUpdateError={handleProcessRowUpdateError}
                hideFooter={true}
                autoHeight={true}
                selectionModel={selectionModel}
                experimentalFeatures={{newEditingApi: true}}
            />
        </Box>
    );
};

export default MetaTable;