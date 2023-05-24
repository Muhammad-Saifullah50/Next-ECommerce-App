import styles from '@/styles/global-desc.module.css'
import ApiDataState from '@/context/dataState'
import Header from '@/components/header/Header'
import Footer from '@/components/Footer/Footer'
import Page from './Page'
import Link from 'next/link'
const Desc_M_002 = () => {

    return (<>
        <Header />
        <div className={styles.banner}>
        <Link href='/bandSawsPage/BandSawsPage'> <button className={styles.btn}>Go Back</button>
  </Link>          <h2>DeWalt Heavy Duty Miter Joint M-002</h2>
    
        </div>
        <ApiDataState>
                <Page />
        </ApiDataState>
        <Footer />
    </>)
}
export default Desc_M_002