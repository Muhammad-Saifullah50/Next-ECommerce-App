import { useState } from "react";
import counterContext from "./counterContext";

// Provider

const CounterState = ({children}) => {

    const [count, setCount] = useState(1)

return (
    <counterContext.Provider value={{count, setCount}}>
        {children}
    </counterContext.Provider>
)
}

export default CounterState