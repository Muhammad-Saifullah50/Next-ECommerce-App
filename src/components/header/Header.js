import Topbar from "./topbar/topbar"
import Lowerbar from "./lowerbar/lowerbar"
import Navbar from "./navbar/navbar"
import styles from '@/styles/header.module.css'
const Header = () => {

    return (
        <>

            <Topbar />
            <Lowerbar />
            <div className={styles.navbar}>
            <Navbar />
        </div >
        </>
    )
}

export default Header