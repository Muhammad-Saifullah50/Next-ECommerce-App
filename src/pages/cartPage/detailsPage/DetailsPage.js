import styles from '@/styles/detailspage.module.css'
const DetailsPage = () => {

    return (<>
        <div className={styles.container}>
            <div className={styles.firstname}>
                <label htmlFor='fname'>First Name:</label>
                <input type="text" placeholder='Enter your first name' id='fname' />
            </div>
            <div className={styles.lastname}>
                <label htmlFor="lname">Last Name"</label>
                <input type="text" placeholder='Enter your last name' id='lname' />

            </div>
            <div className={styles.phone}>
                <label htmlFor="phno">Phone Number:</label>
                <input type="text" placeholder='Enter your phone number' id='phno' />


            </div>
            <div className={styles.payment}>
                Payment Options:  <input type="radio" name="cod" id="cod" />

                <label htmlFor="cod">Cash On Delivery</label>
                <input type="radio" name="online" id="online" checked />

                <label htmlFor="online">Online Payment</label>

            </div>
            <div className={styles.address}>
                <label htmlFor="address">Residential Address</label>
                <input type="text" placeholder='Enter your residential address' id='address' />
            </div>
            <div className={styles.btns}>

                <button>Cancel Order</button>
                <button>Confirm Order</button>
            </div>

        </div>
    </>)
}
export default DetailsPage