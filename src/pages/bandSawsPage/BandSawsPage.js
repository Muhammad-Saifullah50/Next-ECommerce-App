import styles from '@/styles/global-category-pages.module.css'
import Header from '@/components/header/Header'

import ApiDataState from '@/context/dataState'
import Items from './Items/Items'
import Footer from '@/components/Footer/Footer'


const BandSawsPage = () => {



    return (
        <>

            <Header />
            <div className={styles.banner}>
                <h2> Dewalt Heavy Duty Band Saws </h2>
            </div>
            <ApiDataState>
                <Items />
            </ApiDataState>
            <Footer />
        </>
    )
}

export default BandSawsPage