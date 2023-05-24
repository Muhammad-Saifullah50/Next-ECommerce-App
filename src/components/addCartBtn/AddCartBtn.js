import styles from '@/styles/addcartbtn.module.css'

const AddCartBtn = ({onClick}) => {

    return (
        <button className={styles.btn} onClick={onClick}>Add To Cart</button>
    )
}
export default AddCartBtn