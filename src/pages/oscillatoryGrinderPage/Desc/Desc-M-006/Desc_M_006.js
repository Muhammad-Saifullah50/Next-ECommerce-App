import styles from '@/styles/global-desc.module.css'
import ApiDataState from '@/context/dataState'
import Header from '@/components/header/Header'
import Footer from '@/components/Footer/Footer'
import Page from './Page'
const Desc_M_006 = () => {

    return (<>
        <Header />
        <div className={styles.banner}>
            <button className={styles.btn}>Go Back</button>
            <h2>DeWalt Heavy Duty Oscillatory Grinder M-006</h2>
        </div>
        <ApiDataState>
            <Page />
        </ApiDataState>
    </>)
}
export default Desc_M_006