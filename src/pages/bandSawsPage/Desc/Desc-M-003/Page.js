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
    // console.log(contentfulData)
    const { cartItems, setCartItems } = useContext(cartContext)
    const [quantity, setQuantity] = useState(1)



    return (<>
        <div className="page descpage  ">

            <div className="intro descintro">
                <div className="introbox">

                    <div className="heading descheading">
                        {renderTitle('3620jt2hJUpqR0rP41nZLT', contentfulData)}
                    </div>
                    <div className="price descprice">
                        {renderPrice('3620jt2hJUpqR0rP41nZLT', contentfulData)}

                    </div>
                    <div className="introtext">
                        <h3>Introduction</h3>
                        {renderIntro('3620jt2hJUpqR0rP41nZLT', contentfulData)}
                    </div>
                </div>
                <div className="image descimage">
                    {renderImage('tCrbRiWSIkuQQcSKqIFPf', 'alt', contentfulData)}
                </div>

            </div>
            <div className="counter">
            <Counter quantity={quantity} setQuantity={setQuantity} />
                <AddCartBtn onClick={() => {
                    alert(`${quantity} items added to cart`)
                    setQuantity(quantity)
                    addItemToCart(
                        productId('3620jt2hJUpqR0rP41nZLT', contentfulData),
                        productName('3620jt2hJUpqR0rP41nZLT', contentfulData),
                        productPrice('3620jt2hJUpqR0rP41nZLT', contentfulData), quantity,
                        cartItems, setCartItems
                    )
                }} />

            </div>
            <div className="overview descoverview">
                <h3 className='text-lg font-bold'>Product Overview</h3>
                {renderOverview('3620jt2hJUpqR0rP41nZLT', contentfulData)}
            </div>

        </div>

    </>)
}
export default Page