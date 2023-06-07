import dataContext from '@/context/dataContext'
import cartContext from '@/context/cart-context/cartContext'
import { useContext,useState } from 'react'
import { renderTitle, renderImage, renderPrice } from '@/pages/bandSawsPage/Items/Items'
import Counter from '@/components/counter/Counter'
import { renderIntro, renderOverview } from '@/pages/rotaryCompressorPage/Desc/Desc-M-023/Page'
import AddCartBtn from '@/components/addCartBtn/AddCartBtn'
import { productId, productName, productPrice, addItemToCart } from '@/pages/rotaryCompressorPage/Desc/Desc-M-023/Page'
const Page = () => {

    const contentfulData = useContext(dataContext)
    const {cartItems, setCartItems} = useContext(cartContext)
    // console.log(contentfulData)
    const [quantity, setQuantity] = useState(1)

    return (<>
        <div className="page descpage  ">

        <div className="intro descintro">
                <div className="introbox">

                <div className="heading descheading">
                        {renderTitle('1IuGmnKA8KYvaI71h2W97i', contentfulData)}
                    </div>
                    <div className="price descprice">
                        {renderPrice('1IuGmnKA8KYvaI71h2W97i', contentfulData)}

                    </div>
                    <div className="introtext">
                    <h3 className='text-lg font-bold'>Introduction</h3>
                        {renderIntro('1IuGmnKA8KYvaI71h2W97i', contentfulData)}
                    </div>
                </div>
                <div className="image descimage">
                    {renderImage('2m5FKJVIIXLF6S2gCedcjs', 'alt', contentfulData)}
                </div>

            </div>
            <div className="counter">
            <Counter quantity={quantity} setQuantity={setQuantity} />
                <AddCartBtn onClick={() => {
                      alert(`${quantity} items added to cart`)
                      setQuantity(quantity)
                    addItemToCart(
                        productId('1IuGmnKA8KYvaI71h2W97i', contentfulData),
                        productName('1IuGmnKA8KYvaI71h2W97i', contentfulData),
                        productPrice('1IuGmnKA8KYvaI71h2W97i', contentfulData),quantity,
                        cartItems, setCartItems

                    )
                }}/>

            </div>
            <div className="overview descoverview">
            <h3  className='text-lg font-bold'>Product Overview</h3>
                {renderOverview('1IuGmnKA8KYvaI71h2W97i', contentfulData)}
            </div>

        </div>

    </>)
}
export default Page
