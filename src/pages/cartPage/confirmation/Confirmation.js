import styles from '@/styles/confirmation.module.css'
import Image from 'next/image'
import Link from 'next/link'
const Confirmation = () => {

    return (
        <div className={styles.container}>
            <Image src='/images/dewaltlogo.png' height={250} width={500} alt='logo'>

            </Image>
            <h2>Thank You for choosing DeWalt</h2>
            <h3>Your Items will be delivered to you soon...</h3>
            <Link href='/'>
                <button className={styles.btn}>
                    Back to Homepage
                </button>
            </Link>
        </div>

    )
}
export default Confirmation