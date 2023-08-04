import { useState, createContext, useEffect } from "react";

export const JobListContext = createContext({
    list: null,
    setlist: () => { },
    filterData: null,
    setFilterData: () => { },
})

export function JobListing({ children }) {
    const [list, setlist] = useState({});
    const [filterData, setFilterData] = useState(list)

    const val = {
        list, setlist, filterData, setFilterData
    }

    useEffect(() => {
        setFilterData(list)
    }, [list])


    return (
        <JobListContext.Provider value={val}>
            {children}
        </JobListContext.Provider>
    );

}