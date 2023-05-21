import styles from '@/styles/global-category-pages.module.css'
import Header from '@/components/header/Header'
import CartList from './cartList/CartList'
const CartPage = () => {

    return (<>
            <Header />
            <div className={styles.banner}>
                <h2> My Cart </h2>
            </div>
            <CartList />
        
    </>)
}
export default CartPage