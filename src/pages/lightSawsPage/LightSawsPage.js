import Header from "@/components/header/Header"
import Items from "./Items/Items"
import ApiDataState from "@/context/dataState"
import styles from '@/styles/lightsawspage.module.css'

const LightSawsPage = () => {

    return (<>
        <Header />
        <div className={styles.banner}>
            <h2> Dewalt Classic Light Saws </h2>
        </div>
        <ApiDataState>
            <Items />
        </ApiDataState>
    </>)
}

export default LightSawsPage