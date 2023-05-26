import styles from '@/styles/bottombar.module.css'
import Image from 'next/image'
const Bottombar = () => {

    return (<>
        <div className={styles.bottombar}>
            <div className={styles.text}>
                <Image src="/images/logo1.png" height={100} width={150} alt='logo'></Image>
                <figcaption>Guranteed Tough</figcaption>
                <p>Dewalt Product Company is formwed with plant and offices in the Leola, Pennsylvania. Thier product is a n electric universal woodworking machine known as the DEWALT Wonder Worker.</p>
                <p>DEWALT Products Co. moves to a new, and for those days, an oustandingly modern plant. </p>
            </div>
            <div className={styles.categories}>
                <h4>Categories</h4>
                <li>Compressors</li>
                <li>Polishers</li>
                <li>Saws</li>
                <li>Service Tools</li>
            </div>
            <div className={styles.links}>
                <h4>Quick Links</h4>
                <li>Our Contacts</li>
                <li>Privacy Policy</li>
                <li>Conditions</li>
                <li>FAQs</li>
                <li>Terms</li>
                <li>Fair Use Policy</li>
            </div>
            <div className={styles.address}>
                <h4>Where we are</h4>
                <p>DeWalt BV</p>
                <p>info@dewalt.eu</p>
                <p>2150 BA Niew-Vennep</p>
                <p>The Netherlands</p>
                <p>Tel: 1234567890</p>
            </div>

        </div>
        <div className={styles.basebox}>
            <ul className={styles.basebar}>
                <li><p>Dewalt. All Rights Reserved</p> </li>
                <li id={styles.policy}>Privacy Policy</li>
                <li id={styles.conditions}>Terms and Conditions</li>
                <li>Contact Us</li>
            </ul>

        </div>
    </>)
}

export default Bottombar