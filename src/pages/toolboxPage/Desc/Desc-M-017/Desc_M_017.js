import styles from '@/styles/global-desc.module.css'
import ApiDataState from '@/context/dataState'
import Header from '@/components/header/Header'
import Footer from '@/components/Footer/Footer'
import Page from './Page'
const Desc_M_017 = () => {

    return (<>
        <Header />
        <div className={styles.banner}>
            <button className={styles.btn}>Go Back</button>
            <h2>DeWalt Multipurpose Toolbox M-017</h2>
        </div>
        <ApiDataState>
                <Page />
        </ApiDataState>
        <Footer />
    </>)
}
export default Desc_M_017