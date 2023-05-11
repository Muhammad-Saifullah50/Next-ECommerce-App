import styles from '@/styles/global-category-pages.module.css'
import ApiDataState from '@/context/dataState'
import Items from './Items/Items'
import Header from '@/components/header/Header'
const AngleGrinderPage = () => {

    return (<>
        <Header />
        <div className={styles.banner}>
            <h2> Dewalt Heavy Duty Angle Grinders </h2>
        </div>
        <ApiDataState>
            <Items />
        </ApiDataState>

    </>)
}

export default AngleGrinderPage