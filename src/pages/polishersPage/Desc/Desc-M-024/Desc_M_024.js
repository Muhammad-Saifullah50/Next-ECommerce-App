import styles from '@/styles/global-desc.module.css'
import ApiDataState from '@/context/dataState'
import Header from '@/components/header/Header'
import Footer from '@/components/Footer/Footer'
import Page from './Page'
import Link from 'next/link'
const Desc_M_024 = () => {

    return (<>
        <Header />
        <div className={styles.banner}>
           <Link href='/polishersPage/PolisherPage'> <button className={styles.btn}>Go Back</button></Link>
            <h2>DeWalt Heavy Duty Polisher M-024
</h2>
        </div>
        <ApiDataState>
            <Page />
        </ApiDataState>
        <Footer />
    </>)
}
export default Desc_M_024