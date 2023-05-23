import styles from '@/styles/global-category-pages.module.css'
import Header from '@/components/header/Header'
import CartList from './cartList/CartList'
import ProceedBtn from './proceedBtn/ProceedBtn'
import { useState } from 'react'
const CartPage = () => {

    const [showDetails, setShowDetails] = useState(false)
    return (<>
            <Header />
            <div className={styles.banner}>
                <h2> My Cart </h2>
            </div>
            <CartList />
            <ProceedBtn />
    
    </>)
}
export default CartPage