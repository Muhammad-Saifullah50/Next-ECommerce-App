import styles from '@/styles/loader.module.css'
import Image from 'next/image'
const Loader = () => {

    return (<>
        <div className={styles.loader}>
            <Image src={'/images/logo1.png'} height={250} width={500} alt='logo'> 

            </Image>
        </div>
    </>

    )
}
export default Loader