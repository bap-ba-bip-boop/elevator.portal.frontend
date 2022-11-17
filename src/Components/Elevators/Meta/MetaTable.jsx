import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";
import {DataGrid} from "@mui/x-data-grid";
import {useCallback, useEffect, useState} from "react";

const MetaTable = ({metaData, header, onChange, editable = true, hasCheckbox, onUpdate}) => {
    const [rows, setRows] = useState([]);
    const [selectionModel, setSelectionModel] = useState([]);

    useEffect(() => {
        return () => {
            let values = [];
            metaData.forEach((row, index) => {
                values.push({'id': index, 'key': row.key, 'value': row.value});
            });
            setRows(values);
        };
    }, []);

    const handleSelection = (selection) => {
        setSelectionModel(selection);
        onChange(selection);
    };

    const columns = [
        {field: "key", headerName: "Key", flex: 1, editable: false},
        {field: "value", headerName: "Value", flex: 1, editable: editable}
    ];

    const handleEdit = useCallback(async (newRow) => {
        await onUpdate(newRow);
        return {...newRow, isNew: false};
    }, [rows]);

    const handleProcessRowUpdateError = useCallback(
        (error) => {
            console.log(error);
        }, []);

    return (
        <Box flex={1} flexGrow={1} marginBottom={5} minWidth={"25em"}>
            <Typography variant={"h5"} marginBottom={1}>{header}</Typography>
            <DataGrid
                rows={rows}
                columns={columns}
                disableSelectionOnClick={true}
                checkboxSelection={hasCheckbox}
                onSelectionModelChange={
                    (newModel) => {
                        handleSelection(newModel);
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