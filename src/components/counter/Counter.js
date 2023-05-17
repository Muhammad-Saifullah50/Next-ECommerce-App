import styles from '@/styles/counter.module.css'
import { useState } from "react"


const Counter = () => {

    const [count, setCount] = useState(1)

    const AddCount = () => setCount(count + 1)
    const SubtractCount = () => setCount(count - 1)
    return(
        <>
        <button className={styles.addbtn} onClick={AddCount}>+</button>
        <span className={styles.count} >{count}</span>
        <button className={styles.subbtn} disabled={count === 1 } onClick={SubtractCount}>-</button>
        </>
        )
}

export default Counter