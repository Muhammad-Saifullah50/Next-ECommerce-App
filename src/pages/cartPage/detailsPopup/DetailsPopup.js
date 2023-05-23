import styles from '@/styles/detailspage.module.css'
const DetailsPopup = () => {

    return (<>
        <div className={styles.container}>
            <form >
                <h2>Personal Details</h2>
                <div className={styles.firstname}>
                    <label htmlFor='fname'>First Name:</label>
                    <input type="text" placeholder='Enter your first name' id='fname' />
                </div>
                <div className={styles.lastname}>
                    <label htmlFor="lname">Last Name:</label>
                    <input type="text" placeholder='Enter your last name' id='lname' />

                </div>
                <div className={styles.phone}>
                    <label htmlFor="phno">Phone Number:</label>
                    <input type="text" placeholder='Enter your phone number' id='phno' />


                </div>
                <div className={styles.payment}>
                    Payment Options:  <div className={styles.cod}><input type="radio" name="pay" id="cod" />

                        <label htmlFor="cod">Cash On Delivery</label>
                    </div>

                    <div className={styles.online}><input type="radio" name="pay" id="online" checked />

                        <label htmlFor="online">Online Payment</label>
                    </div>
                </div>
                <div className={styles.address}>
                    <label htmlFor="address">Residential Address</label>
                    <input type="text" placeholder='Enter your residential address' id='address' />
                </div>
                <div className={styles.btns}>

                    <button id={styles.cancel}>Cancel Order</button>
                    <button id={styles.confirm}>Confirm Order</button>
                </div>
            </form>
        </div>
    </>)
}
export default DetailsPopup