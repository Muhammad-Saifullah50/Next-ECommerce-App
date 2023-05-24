import styles from '@/styles/global-desc.module.css'
import ApiDataState from '@/context/dataState'
import Header from '@/components/header/Header'
import Footer from '@/components/Footer/Footer'
import Page from './Page'
import Link from 'next/link'
const Desc_M_009 = () => {

    return (<>
        <Header />
        <div className={styles.banner}>
        <Link href='/lightSawsPage/LightSawsPage'> <button className={styles.btn}>Go Back</button></Link>
            <h2>DeWalt Classic Hack Saw M-009

            </h2>
        </div>
        <ApiDataState>
                <Page />
        </ApiDataState>
        <Footer />
    </>)
}
export default Desc_M_009