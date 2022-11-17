import React from "react";
import MetaTable from "./MetaTable.jsx";

const MetaPanel = ({Elevator, onChange, pushUpdate}) => {

    const selectionChange = (selection) => {
        onChange(selection)
    }

    return <>
        {Elevator.deviceMeta && <MetaTable
            metaData={Elevator.deviceMeta}
            onChange={selectionChange}
            header={"Device"}
            editable={true}
            hasCheckbox
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
    </>;
};

export default MetaPanel;