import styles from '@/styles/oscillatorygrinderspage.module.css'
import ApiDataState from '@/context/dataState'
import Items from './Items/Items'
import Header from '@/components/header/Header'
const OscillatoryGrinderPage = () => {

    return (<>
        <Header />
        <div className={styles.banner}>
            <h2> Dewalt Heavy Duty Oscillatory Grinders </h2>
        </div>
        <ApiDataState>
            <Items />
        </ApiDataState>

    </>)
}

export default OscillatoryGrinderPage