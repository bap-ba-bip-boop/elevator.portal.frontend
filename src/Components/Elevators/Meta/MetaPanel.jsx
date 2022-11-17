import Box from "@mui/material/Box";
import React from "react";
import MetaTable from "./MetaTable.jsx";

const MetaPanel = ({Elevator, onChange, pushUpdate}) => {

    const selectionChange = (selection) => {
        onChange(selection);
    };

    const handleUpdate = async (values) => {
        await pushUpdate(values);
    }

    return <Box>
        {Elevator.deviceMeta && <MetaTable
            metaData={Elevator.deviceMeta}
            onChange={selectionChange}
            header={"Device"}
            editable={true}
            hasCheckbox
            onUpdate={handleUpdate}
        />
        }

        {Elevator.typeMeta &&
            <MetaTable
                metaData={Elevator.typeMeta}
                header={"Type"}
                editable={false}
                hasCheckbox={false}
            />
        }
    </Box>;
};

export default MetaPanel;