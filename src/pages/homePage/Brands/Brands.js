import styles from '@/styles/brands.module.css'
import Image from 'next/image'
const Brands = () => {

    return (
        <div className={styles.brandbox}>
            <div id={styles.brandlogo}>
                OUR BRANDS
            </div>
            <div className="brandlogo">
                <Image src="/images/wordpress.png" height={115} width={154}
                alt='wordpress'></Image>
            </div>
            <div className="brandlogo">
                <Image src="/images/houston.png" height={115} width={154}alt='houston'></Image>

            </div>
            <div className="brandlogo">
                <Image src="/images/colorguard.png" height={115} width={154} alt='colorguard'></Image>

            </div>
            <div className="brandlogo">
                <Image src="/images/powertools.jpg" height={115} width={154} alt='powertools'></Image>

            </div>
        </div>
    )
}

export default Brands