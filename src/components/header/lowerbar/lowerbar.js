import styles from '@/styles/lowerbar.module.css'
import Image from 'next/image'
import Head from 'next/head'

const lowerbar = () => {

    return (<>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Baloo+Bhai+2&display=swap" rel="stylesheet" />
        </Head>
        <div className={styles.lowerbar}>
            <div className={styles.logobox}>
                <Image className={styles.logo} src="/images/logo1.png" width={100}
                    height={80}>

                </Image>
            </div>
            <div className={styles.searchbox}>
                <input type="text" className={styles.search} placeholder="      I am looking for ..." />

                <Image className={styles.searchicon} src="/images/search.png" width={15} height={15}>
                </Image>
            </div>
            <div className={styles.cartbox}>
               <div className={styles.carttext}>&nbsp;Shopping Cart</div> 
                <Image src="/images/cart1.png" width={25} height={23}>

                </Image>
            </div>
        </div>
    </>)
}

export default lowerbar