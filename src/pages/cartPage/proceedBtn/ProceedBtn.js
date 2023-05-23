import styles from '@/styles/proceedbtn.module.css'

const ProceedBtn = ({onclick}) => {

    return(<>
    <div className={styles.btn}>
        <button onClick={onclick}>Proceed</button>
    </div>
    </>)
} 
export default ProceedBtn