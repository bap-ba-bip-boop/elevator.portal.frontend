import Box from "@mui/material/Box";
import React from "react";
import {useElevatorContext} from "../../../Context/ElevatorContext.jsx";
import MetaTable from "./MetaTable.jsx";

const MetaPanel = () => {
    const {DeviceMeta, TypeMeta} = useElevatorContext();

    return <Box>
        {DeviceMeta && <MetaTable
            metaData={DeviceMeta}
            header={"Device"}
            editable={true}
            hasCheckbox
        />
        }

        {TypeMeta &&
            <MetaTable
                metaData={TypeMeta}
                header={"Type"}
                editable={false}
                hasCheckbox={false}
            />
        }
    </Box>;
};

export default MetaPanel;