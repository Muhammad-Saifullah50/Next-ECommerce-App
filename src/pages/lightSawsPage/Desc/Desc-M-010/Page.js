import dataContext from '@/context/dataContext'
import { useContext, useState } from 'react'
import { renderTitle, renderImage, renderPrice } from '@/pages/bandSawsPage/Items/Items'
import Counter from '@/components/counter/Counter'
import { renderIntro, renderOverview } from '@/pages/rotaryCompressorPage/Desc/Desc-M-023/Page'
import cartContext from '@/context/cart-context/cartContext'
import { productId, productName, productPrice, addItemToCart } from '@/pages/rotaryCompressorPage/Desc/Desc-M-023/Page'
import AddCartBtn from '@/components/addCartBtn/AddCartBtn'
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
                        {renderTitle('3ey30zhdsG6vhSDRfllWIf', contentfulData)}
                    </div>
                    <div className="price descprice">
                        {renderPrice('3ey30zhdsG6vhSDRfllWIf', contentfulData)}

                    </div>
                    <div className="introtext">
                        <h3 className='text-lg font-bold'>Introduction</h3>
                        {renderIntro('3ey30zhdsG6vhSDRfllWIf', contentfulData)}
                    </div>
                </div>
                <div className="image descimage">
                    {renderImage('6MY1fRaLmgCNRjupzne5aw', 'alt', contentfulData)}
                </div>

            </div>
            <div className="counter">
                <Counter quantity={quantity} setQuantity={setQuantity} />
                <AddCartBtn onClick={() => {
                    alert(`${quantity} items added to cart`)
                    setQuantity(quantity)
                    addItemToCart(
                        productId('3ey30zhdsG6vhSDRfllWIf', contentfulData),
                        productName('3ey30zhdsG6vhSDRfllWIf', contentfulData),
                        productPrice('3ey30zhdsG6vhSDRfllWIf', contentfulData), quantity, cartItems, setCartItems
                    )
                }} />

            </div>
            <div className="overview descoverview">
                <h3 className='text-lg font-bold'>Product Overview</h3>
                {renderOverview('3ey30zhdsG6vhSDRfllWIf', contentfulData)}
            </div>

        </div>

    </>)
}
export default Page