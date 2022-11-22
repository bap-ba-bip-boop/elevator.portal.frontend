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
    const [currentId, setCurrentId] = useState(() => id);

    const [DeviceMeta, setDeviceMeta] = useState(() => compactArray(deviceMeta));
    const [TypeMeta, setTypeMeta] = useState(() => compactArray(typeMeta));
    const [floor, setFloor] = useState(DeviceMeta.CurrentFloor);
    const [selectedValues, setSelectedValues] = useState([]);
    const [updateValue, setUpdateValue] = useState(() => {});
    let functioning = isFunctioning;

    const selectedValuesChange = (values) => {
        setSelectedValues(values);
    };

    const pushUpdateFunction = (value) => {
        setUpdateValue(value);
    };

    const flipFunctioning = () => functioning = !functioning;

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
        DeviceMeta,
        TypeMeta,
        floor,
        Name,
        Building,
        Company,
        Type,
        selectedValues,
        updateValue
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