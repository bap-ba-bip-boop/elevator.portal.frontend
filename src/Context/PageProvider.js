import React, { useContext, useState } from 'react'

const PageContext = React.createContext();
const UpdatePageContext = React.createContext();

export const usePage = () => {
    return useContext(PageContext);
}

export const usePageUpdate = () => {
    return useContext(UpdatePageContext)
}

export const PageProvider = ({children}) => {

    const [selectedPage, setSelectedPage] = useState("ElevatorIndex");

    const updateSelectedPage = newPage => setSelectedPage(newPage);

  return (
    <PageContext.Provider value={selectedPage}>
        <UpdatePageContext.Provider value={updateSelectedPage}>
            {children}
        </UpdatePageContext.Provider>
    </PageContext.Provider>
  )
}
