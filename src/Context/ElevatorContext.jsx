import {createContext, useContext, useState} from "react";

const ElevatorContext = createContext(undefined);
export const useElevatorContext = () => {
    return useContext(ElevatorContext);
};

export const ElevatorProvider = ({Elevator, children}) => {
    const {
        id,
        isFunctioning,
        deviceMeta,
        typeMeta,
        name: Name,
        buildingName: Building,
        companyName: Company,
        elevatorType: Type
    } = Elevator;

    const [DeviceMeta, setDeviceMeta] = useState(() => compactArray(deviceMeta));
    const [TypeMeta, setTypeMeta] = useState(() => compactArray(typeMeta));
    const [Floor, setFloor] = useState(DeviceMeta.CurrentFloor);
    const [updateValue, setUpdateValue] = useState(() => {});
    const [functioning, setFunctioning] = useState(isFunctioning);
    const [selectionValues, setSelectionValues] = useState([]);
    const flipFunctioning = () => setFunctioning(!functioning);

    const UpdateFloor = (floor) => {
        setDeviceMeta(
            {
                ...DeviceMeta,
                currentFloor: floor
            }
        );
        setFloor(floor);
    };

    return <ElevatorContext.Provider value={{
        UpdateFloor,
        flipFunctioning,
        setSelectionValues,
        id,
        DeviceMeta,
        TypeMeta,
        Floor,
        Name,
        Building,
        Company,
        Type,
        selectionValues
    }}>
        {children}
    </ElevatorContext.Provider>;
};

const compactArray = (arr) => Object.assign(...arr.map(item => {
        let arr = [];
        for (const key in item)
            arr.push(item[key]);

        return {
            [arr[0]]: arr[1]
        };
    }
));