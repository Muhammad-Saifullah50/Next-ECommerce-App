import Header from '@/components/header/Header'
import CartList from './cartList/CartList'
import { useState, useContext } from 'react'
import Footer from '@/components/Footer/Footer'
import cartContext from '@/context/cart-context/cartContext'

const CartPage = () => {

    const { cartItems, setCartItems } = useContext(cartContext)
    console.log(cartItems)
    let cartLength = cartItems.length;
    console.log(cartLength);

    const [showDetails, setShowDetails] = useState(false)

    const openDetails = () => {
        // the under logic is for preventing the details section from opening when the cart is empty

        console.log(cartLength);
        if (cartLength === 0) {
            setShowDetails(false);
            alert("Sorry! There is nothing in your cart")
        }
        else {
            setShowDetails(true)
        }

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
            <button className=' bg-green-700 hover:bg-green-600  text-white px-5 py-1 rounded-sm font-bold' onClick={() => openDetails(cartLength)}>Proceed</button>
        </div>

        {/* container part */}
        {showDetails && (
            <div className="container bg-white flex flex-col px-1 sm:px-7 md:w-[95%] mx-auto border-2 border-slate-200">
                <form action='/cartPage/confirmation/Confirmation' >
                    <h2 className='font-bold text-center py-5'>Personal Details</h2>

                    <div className="firstname flex my-3 ">
                        <label className='w-1/3 sm:w-1/4' htmlFor='fname'>First Name:</label>
                        <input className='w-full border-[1px] border-slate-300 rounded-sm px-3' type="text" placeholder='Enter your first name' id='fname' />

                    </div>
                    <div className="lastname flex my-3">
                        <label className='w-1/3 sm:w-1/4' htmlFor="lname">Last Name:</label>
                        <input className='w-full border-[1px] border-slate-300 rounded-sm px-3' type="text" placeholder='Enter your last name' id='lname' />

                    </div>
                    <div className="phone flex my-3">
                        <label className='w-1/2 sm:w-1/4' htmlFor="phno">Phone Number:</label>
                        <input className='w-full border-[1px] border-slate-300 rounded-sm px-3' type="text" placeholder='Enter your phone number' id='phno' />

                    </div>
                    <div className="payment flex justify-between  my-3">
                        Payment Options:
                        <div className="options flex w-3/4 justify-evenly">
                            <div className="cod"><input type="radio" name="pay" id="cod" />

                                <label className='ml-1' htmlFor="cod">Cash On Delivery</label>
                            </div>

                            <div className="online"><input type="radio" name="pay" id="online" checked />

                                <label className='ml-1' htmlFor="online">Online Payment</label>
                            </div>
                        </div>
                    </div>
                    <div className="address flex my-3">
                        <label className='w-1/3 sm:w-1/4' htmlFor="address">Address</label>
                        <input className='w-full border-[1px] border-slate-300 rounded-sm px-3' type="text" placeholder='Enter your residential address' id='address' />
                    </div>
                    <div className="btns flex justify-between my-3">

                        <button className=' bg-red-600 hover:bg-red-500  text-white px-2 py-1 rounded-sm ' id="confirm" onClick={closeDetails} >Cancel Order</button>

                        <button className=' bg-green-700 hover:bg-green-600  text-white px-2 py-1 rounded-sm ' id="confirm">Confirm Order</button>
                    </div>
                </form>


            </div>

        )}
        <Footer />
    </>)
}
export default CartPage





