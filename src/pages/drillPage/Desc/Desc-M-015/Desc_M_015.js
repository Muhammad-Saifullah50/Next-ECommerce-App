import styles from '@/styles/global-desc.module.css'
import ApiDataState from '@/context/dataState'
import Header from '@/components/header/Header'
import Footer from '@/components/Footer/Footer'
import CartState from '@/context/cart-context/cartState'
import Page from './Page'
const Desc_M_015 = () => {

    return (<>
        <Header />
        <div className={styles.banner}>
            <button className={styles.btn}>Go Back</button>
            <h2>DeWalt Heavy Duty Drill Machine M-015</h2>
        </div>
        <ApiDataState>
            <CartState>
                <Page />
            </CartState>
        </ApiDataState>
        <Footer />
    </>)
}
export default Desc_M_015