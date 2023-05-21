import styles from '@/styles/global-desc.module.css'
import ApiDataState from '@/context/dataState'
import Header from '@/components/header/Header'
import Footer from '@/components/Footer/Footer'
import Page from './Page'
import CartState from '@/context/cart-context/cartState'
const Desc_M_008 = () => {

    return (<>
        <Header />
        <div className={styles.banner}>
            <button className={styles.btn}>Go Back</button>
            <h2> DeWalt Classic Saw M-008</h2>
        </div>
        <ApiDataState>
            <CartState>
            <Page />
            </CartState>
        </ApiDataState>
        <Footer />
    </>)
}
export default Desc_M_008