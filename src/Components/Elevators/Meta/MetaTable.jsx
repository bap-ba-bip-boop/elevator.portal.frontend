import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";
import {DataGrid} from "@mui/x-data-grid";
import {useEffect, useState} from "react";

const MetaTable = ({metaData, header, onChange, editable = true, hasCheckbox}) => {
    const [rows, setRows] = useState(() => []);
    const [selectionModel, setSelectionModel] = useState([]);

    useEffect(() => {
        return () => {
            let values = [];
            metaData.forEach((row, index) => {
                values.push({"id": row.key, "key": row.key, "value": row.value});
            });
            setRows(values);
        };
    }, []);

    const handleSelection = (selection) => {
        setSelectionModel(selection);
        onChange(selection);
    }

    const onUpdate = (selection) => {
        console.log(selection);
    }

    const columns = [
        {field: "key", headerName: "Key", flex: 1, editable: false},
        {field: "value", headerName: "Value", flex: 1, editable: editable}
    ];
    return (
        <Box sx={{width: "50%"}} marginY={3}>
            <Typography variant={"h5"} marginBottom={1}>{header}</Typography>
            <DataGrid
                disableSelectionOnClick={true}
                checkboxSelection={hasCheckbox}
                onSelectionModelChange={
                    (newModel) => {
                        handleSelection(newModel);
                    }
                }
                onCellEditCommit={(cell)=>{
                    onUpdate(cell);
                }}
                selectionModel={selectionModel}
                autoHeight={true}
                rows={rows}
                columns={columns}
                experimentalFeatures={{newEditingApi: true}}
            />
        </Box>
    );
};

export default MetaTable;