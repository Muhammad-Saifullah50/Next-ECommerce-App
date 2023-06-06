import cartstyles from '@/styles/cart.module.css'
import Header from '@/components/header/Header'
import CartList from './cartList/CartList'
import { useState } from 'react'
import Footer from '@/components/Footer/Footer'
const CartPage = () => {
    const [showDetails, setShowDetails] = useState(false)

    const openDetails = () => {
        setShowDetails(true)
    }
    const closeDetails = () => {
        setShowDetails(false)
    }
    return (<>
        <Header />
        <div className="categorypage-banner">
            <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold'> My Cart </h2>
        </div>
        <CartList />

        <div className="btn flex justify-center my-5">
            <button className=' bg-green-700 hover:bg-green-600  text-white px-5 py-1 rounded-sm font-bold' onClick={openDetails}>Proceed</button>
        </div>

        {/* container part */}
        {showDetails && (
            <div className={cartstyles.container}>
                <form action='/cartPage/confirmation/Confirmation' >
                    <h2>Personal Details</h2>
                    <div className={cartstyles.firstname}>
                        <label htmlFor='fname'>First Name:</label>
                        <input type="text" placeholder='Enter your first name' id='fname' />

                    </div>
                    <div className={cartstyles.lastname}>
                        <label htmlFor="lname">Last Name:</label>
                        <input type="text" placeholder='Enter your last name' id='lname' />

                    </div>
                    <div className={cartstyles.phone}>
                        <label htmlFor="phno">Phone Number:</label>
                        <input type="text" placeholder='Enter your phone number' id='phno' />

                    </div>
                    <div className={cartstyles.payment}>
                        Payment Options:  <div className={cartstyles.cod}><input type="radio" name="pay" id="cod" />

                            <label htmlFor="cod">Cash On Delivery</label>
                        </div>

                        <div className={cartstyles.online}><input type="radio" name="pay" id="online" checked />

                            <label htmlFor="online">Online Payment</label>
                        </div>
                    </div>
                    <div className={cartstyles.address}>
                        <label htmlFor="address">Residential Address</label>
                        <input type="text" placeholder='Enter your residential address' id='address' />
                    </div>
                    <div className={cartstyles.btns}>

                        <button onClick={closeDetails} id={cartstyles.cancel}>Cancel Order</button>
                        <button id={cartstyles.confirm}>Confirm Order</button>
                    </div>
                </form>


            </div>
            
        )}
        <Footer />
    </>)
}
export default CartPage





