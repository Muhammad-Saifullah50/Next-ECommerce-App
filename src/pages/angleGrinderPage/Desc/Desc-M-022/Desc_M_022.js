import styles from '@/styles/global-desc.module.css'
import ApiDataState from '@/context/dataState'
import CartState from '@/context/cart-context/cartState'
import Header from '@/components/header/Header'
import Footer from '@/components/Footer/Footer'
import Page from './Page'
const Desc_M_022 = () => {

    return (<>
        <Header />
        <div className={styles.banner}>
            <button className={styles.btn}>Go Back</button>
            <h2>DeWalt Heavy Duty Angle Grinder M-022</h2>
        </div>
        <ApiDataState>
            <CartState>
                <Page />
            </CartState>
        </ApiDataState>
        <Footer />
    </>)
}
export default Desc_M_022