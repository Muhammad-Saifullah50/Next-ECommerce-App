import styles from '@/styles/cartlist.module.css'
import { useContext } from 'react'
import cartContext from '@/context/cart-context/cartContext'


// console.log([cartItems])

const CartList = () => {
    const { cartItems, setCartItems } = useContext(cartContext)
    console.log(cartItems)


    const deleteItem = (id) => {
        console.log(id)
        const updatedItems = cartItems.filter((item) => item.id !== id)
        setCartItems(updatedItems)

    }
    const deleteAll = () => {
        setCartItems([])
    }
    return (<>
        <div className={styles.heading}>
            <div className={styles.name}><h3>Product Title</h3></div>
            <div className={styles.quantity}><h3>Quantity</h3></div>
            <div className={styles.price}><h3>Price</h3></div>
            <div className={styles.button}>
                <button onClick={deleteAll}>Empty</button>
            </div>

        </div>
        <div className={styles.list}>

            {cartItems.map((item) =>
            (
                <div key={item.id} className={styles.listitem}>
                    <div className={styles.name}> <h4>{item.name}</h4></div>
                    <div className={styles.quantity}> <p>{item.quantity}</p></div>
                    <div className={styles.price}> <p>{item.price}</p></div>
                    <div className={styles.button}>
                        <button onClick={() => deleteItem(item.id)}>Remove</button>
                    </div>
                </div>
            )

            )}
        </div>
    </>)
}
export default CartList