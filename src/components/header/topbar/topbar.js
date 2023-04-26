import styles from '@/styles/topbar.module.css'
import Image from 'next/image'
const topbar = () => {

    return (<>
       
        <div className={styles.topbar}>
            <div className={styles.phno}>
                <Image className={styles.phone} src="/images/phone.png" width={15} height={15}>
                </Image>
                &nbsp;+1234567890

            </div>
            <div className={styles.timing}>
                <Image className={styles.clock} src="/images/clock.jpg" width={15} height={15}>

                </Image>
                &nbsp; Mon - Sun 8:00 am - 5:00 pm
            </div>
            <div className={styles.sidebox}>
                <ul className={styles.topnav}>
                    <li>EUR</li>
                    <li>About Us</li>
                    <li>Customer Service</li>
                    <li id={styles.login}>Login</li>
                </ul>
            </div>
        </div>
    </>)
}

export default topbar