import styles from '@/styles/global-category-pages.module.css'
import ApiDataState from '@/context/dataState'
import Items from './Items/Items'
import Header from '@/components/header/Header'
const DrillPage = () => {

    return (<>
        <Header />
        <div className={styles.banner}>
            <h2> Dewalt Heavy Duty Drill Machines </h2>
        </div>
        <ApiDataState>
            <Items />
        </ApiDataState>

    </>)
}

export default DrillPage