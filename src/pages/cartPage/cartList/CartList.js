import { useContext } from 'react'
import cartContext from '@/context/cart-context/cartContext'


// console.log([cartItems])

const CartList = () => {
  const { cartItems, setCartItems } = useContext(cartContext)
    console.log(cartItems)


    const deleteItem = (id) => {
        console.log(id)
        const updatedItems = cartItems.filter((item) => item.id !== id)
        setCartItems(updatedItems)

    }
    const deleteAll = () => {
        setCartItems([])
    }
    return (<>
        <div className="heading flex w-full  md:w-[95%] mx-auto h-12 justify-between items-center bg-white px-1  text-center font-bold md:text-lg">
            <div className="name w-1/2"><h3>Product Title</h3></div>
            <div className="quantity w-[12%]"><h3>Quantity</h3></div>
            <div className="price w-[20%]"><h3>Price</h3></div>
            <div className="button w-[18%]">
                <button className='bg-red-600 text-white px-2 md:px-4 py-1 rounded-sm' onClick={deleteAll}>Empty</button>
            </div>

        </div>
        <div className="list flex flex-col">

            {cartItems.map((item) =>
            (
                <div key={item.id} className="listitem flex bg-white w-full  md:w-[95%] mx-auto px-1 h-14 justify-between items-center text-center my-2 shadow-md shadow-slate-400 md:text-lg md:rounded-xl">
                    <div className="name w-1/2"> <h4>{item.name}</h4></div>
                    <div className="quantity w-[12%]"> <p>{item.quantity}</p></div>
                    <div className="price w-[20%]"> <p>{item.price}</p></div>
                    <div className="button w-[18%]">
                        <button className='bg-red-600 text-white px-1 md:px-3 py-1 rounded-sm' onClick={() => deleteItem(item.id)}>Remove</button>
                    </div>
                </div>
            )

            )}
        </div>
    </>)
}
export default CartList