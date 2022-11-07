import React, { useContext, useState } from 'react'

const ElevatorContext = React.createContext();
const UpdateElevatorContext = React.createContext();

export const useElevator = () => {
  return useContext(ElevatorContext);
}

export const useElevatorUpdate = () => {
  return useContext(UpdateElevatorContext);
}

export const ElevatorProvider = ({ children }) => {

  const [selectedElevatorId, setSelectedElevatorId] = useState(() => "");

  const updateSelectedElevatorID = (newId) => setSelectedElevatorId(newId);

  return (
    <ElevatorContext.Provider value={selectedElevatorId}>
      <UpdateElevatorContext.Provider value={updateSelectedElevatorID}>
        {children}
      </UpdateElevatorContext.Provider>
    </ElevatorContext.Provider>
  )
}
