import { useState, useEffect } from "react";
import dataContext from "./dataContext";

// This is a provider for the context

const ApiDataState = ({children}) => {
    const [contentfulData, setContentfulData] = useState({});


    const apiData = async () => {
        const response = await fetch(`https://cdn.contentful.com/spaces/25h38m57z8zs/entries?access_token=0G9TBJln4K0otkAUEV1f2uT90L0R5kWG6qFoNvmkiT4`);

        const result = await response.json()
        setContentfulData(result)
        console.log(result)
    }
    // use effect takes two parameters, a callback function and an emopty array

    useEffect(() => {
        apiData();
    }, [])

    return (
        <dataContext.Provider value={contentfulData}>
            {children}
        </dataContext.Provider>
    )
}

export default ApiDataState 
