import styles from '@/styles/upperbar.module.css'

const Upperbar = () => {

    return (<>
        <div className={styles.newsletter}>
            <div className={styles.text}>
                <h3>Subscribe to our Newsletter</h3>
                <p>We dont share your info with 3rd parties</p>
            </div>
            <div className={styles.input}>
                <div className={styles.email}>
                <label htmlFor="email">Email Address </label>
                <input type="text" placeholder='Enter your email address' id='email' />
                </div>
                <div className={styles.agreement}>
                <input type="checkbox" name="checkbox" id="checkbox" />
                <label htmlFor="checkbox">I agree to the terms and conditions</label>
                </div>
            </div>
            <button className={styles.btn}>Subscribe</button>
        </div>
    </>)
}
export default Upperbar