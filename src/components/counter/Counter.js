import { useState } from "react"


const Counter = () => {

    const [count, setCount] = useState(1)

    const AddCount = () => setCount(count + 1)
    const SubtractCount = () => setCount(count - 1)
    return (
        <>
            <div className="counter bg-slate-200 h-10 w-28 flex  items-center">
                <button className="subbtn w-7 h-7 bg-slate-300" disabled={count === 1} onClick={SubtractCount}>-</button>

                <span className="count  h-7 mx-auto my-auto flex justify-center items-center" >{count}</span>
                <button className="addbtn w-7 h-7 bg-slate-300" disabled={count === 5} onClick={AddCount}>+</button>

            </div>
        </>
    )
}

export default Counter