import React from "react";
import MetaTable from "./MetaTable.jsx";

const MetaPanel = ({Elevator}) => {
    return <>
        {Elevator.deviceMeta && <MetaTable metaData={Elevator.deviceMeta} header={"Device"} editable={true}/> }
        {Elevator.typeMeta && <MetaTable metaData={Elevator.typeMeta} header={"Type"} editable={false} /> }
    </>;
};

export default MetaPanel;