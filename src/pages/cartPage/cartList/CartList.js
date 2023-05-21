import styles from '@/styles/cart.module.css'
import { useContext } from 'react'
import cartContext from '@/context/cart-context/cartContext'


// console.log([cartItems])

const CartList = () => {
    const { cartItems } = useContext(cartContext)
    console.log(cartItems)

   
    return (<>
        <div className={styles.list}>
            
            {cartItems.map((item) =>
            (
                <div key={item.id} className={styles.listitem}>
                   <div className={styles.name}> <h4>{item.name}</h4></div>
                   <div className={styles.quantity}> <p>{item.quantity}</p></div>
                   <div className={styles.price}> <p>{item.price}</p></div>
                </div>
            )

            )}
        </div>
    </>)
}
export default CartList