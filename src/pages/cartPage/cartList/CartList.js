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
                    <h4>{item.name}</h4>
                    <p>{item.quantity}</p>
                    <p>{item.price}</p>
                </div>
            )

            )}
        </div>
    </>)
}
export default CartList