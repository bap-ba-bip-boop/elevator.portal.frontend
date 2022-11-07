import React, { useContext, useState } from 'react'

const ErrorReportContext = React.createContext();
const UpdateErrorReportContext = React.createContext();

export const useErrorReport = () => {
    return useContext(ErrorReportContext);
  }
  
  export const useErrorReportUpdate = () => {
    return useContext(UpdateErrorReportContext);
  }

export const ErrorReportProvider = ({children}) => {

    const [selectedErrorId, setSelectedErrorId] = useState("");

    const updateSelectedErrorId = (newId) => setSelectedErrorId(newId);

  return (
    <ErrorReportContext.Provider value={selectedErrorId}>
      <UpdateErrorReportContext.Provider value={updateSelectedErrorId}>
          {children}
      </UpdateErrorReportContext.Provider>
    </ErrorReportContext.Provider>
  )
}
