import { useState, createContext, useEffect } from "react";

export const SearchContext = createContext({
    searchVal: "",
    setSearchVal: () => { },
})

export function SearchContextProvider({ children }) {
    const [searchVal, setSearchVal] = useState();

    const val = {
        searchVal, setSearchVal
    }

    return (
        <SearchContext.Provider value={val}>
            {children}
        </SearchContext.Provider>
    );

}