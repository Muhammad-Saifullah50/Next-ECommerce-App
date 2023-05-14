import { useState } from "react"

const Counter = () => {

    const [count, setCount] = useState(1)

    const AddCount = () => setCount(count + 1)
    const SubtractCount = () => setCount(count - 1)
    return(
        <>
        <button onClick={AddCount}>+</button>
        <span>{count}</span>
        <button disabled={count === 1 } onClick={SubtractCount}>-</button>
        </>
        )
}

export default Counter