import styles from '@/styles/global-category-pages.module.css'
import Header from '@/components/header/Header'
import CartList from './cartList/CartList'
import ProceedBtn from './proceedBtn/ProceedBtn'
import { useState } from 'react'
import DetailsPopup from './detailsPopup/DetailsPopup'
const CartPage = () => {

    const [showDetails, setShowDetails] = useState(false)

    const handleClick = () => {
        setShowDetails(true)
    }

    return (<>
        <Header />
        <div className={styles.banner}>
            <h2> My Cart </h2>
        </div>
        <CartList />
        {!showDetails && <ProceedBtn onclick={handleClick} />}

        {showDetails && <DetailsPopup />}

    </>)
}
export default CartPage