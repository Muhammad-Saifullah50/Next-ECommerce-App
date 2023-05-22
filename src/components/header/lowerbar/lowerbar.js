
import styles from '@/styles/lowerbar.module.css'
// import '@/styles/globals.css'


import Image from 'next/image'
import Link from 'next/link'

const lowerbar = () => {

    return (<>

        <div className={styles.lowerbar}>
            <div className={styles.logobox}>
                <Image className={styles.logo} src="/images/logo1.png" width={100}
                    height={80} alt='logo'>

                </Image>
            </div>
            <div className={styles.searchbox}>
                <input type="text" className={styles.search} placeholder="      I am looking for ..." />

                <Image className={styles.searchicon} src="/images/search.png" width={15} height={15} alt='search icon'>
                </Image>
            </div>
            <Link href='/cartPage/CartPage'>
                <button className={styles.cartbox}>
                    <div className={styles.carttext}>&nbsp;Shopping Cart</div>
                    <Image src="/images/cart1.png" width={25} height={23} alt='cart'>

                    </Image>

                </button>
            </Link>

        </div>
    </>)
}

export default lowerbar