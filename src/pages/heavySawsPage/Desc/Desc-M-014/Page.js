import dataContext from '@/context/dataContext'
import { useContext, useState } from 'react'
import { renderTitle, renderImage, renderPrice } from '@/pages/bandSawsPage/Items/Items'
import Counter from '@/components/counter/Counter'
import { renderIntro, renderOverview } from '@/pages/rotaryCompressorPage/Desc/Desc-M-023/Page'
import AddCartBtn from '@/components/addCartBtn/AddCartBtn'
import cartContext from '@/context/cart-context/cartContext'
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
                        {renderTitle('nkIeVWCpb2ZqcUwApG9Cc', contentfulData)}
                    </div>
                    <div className="price descprice">
                        {renderPrice('nkIeVWCpb2ZqcUwApG9Cc', contentfulData)}

                    </div>
                    <div className="introtext">
                        <h3 className='text-lg font-bold'>Introduction</h3>
                        {renderIntro('nkIeVWCpb2ZqcUwApG9Cc', contentfulData)}
                    </div>
                </div>
                <div className="image descimage">
                    {renderImage('MH5bzjSROfpwPKAZou9Jt', 'alt', contentfulData)}
                </div>

            </div>
            <div className="counter">
                <Counter quantity={quantity} setQuantity={setQuantity} />
                <AddCartBtn onClick={() => {
                    alert(`${quantity} items added to cart`)
                    setQuantity(quantity)
                    addItemToCart(
                        productId('nkIeVWCpb2ZqcUwApG9Cc', contentfulData),
                        productName('nkIeVWCpb2ZqcUwApG9Cc', contentfulData),
                        productPrice('nkIeVWCpb2ZqcUwApG9Cc', contentfulData), quantity,
                        cartItems, setCartItems
                    )
                }} />

            </div>
            <div className="overview descoverview">
                <h3 className='text-lg font-bold'>Product Overview</h3>
                {renderOverview('nkIeVWCpb2ZqcUwApG9Cc', contentfulData)}
            </div>

        </div>

    </>)
}
export default Page