import styles from '@/styles/bandsawspage.module.css'
import Header from '@/components/header/Header'

import ApiDataState from '@/context/dataState'
import Items from './Items/Items'

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

        </>
    )
}

export default BandSawsPage