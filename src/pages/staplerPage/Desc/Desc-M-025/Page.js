import dataContext from '@/context/dataContext'
import { useContext } from 'react'
import { renderTitle, renderImage, renderPrice } from '@/pages/bandSawsPage/Items/Items'
import cartContext from '@/context/cart-context/cartContext'
import { productId, productName, productPrice, addItemToCart } from '@/pages/rotaryCompressorPage/Desc/Desc-M-023/Page'
import Counter from '@/components/counter/Counter'
import { renderIntro, renderOverview } from '@/pages/rotaryCompressorPage/Desc/Desc-M-023/Page'
import AddCartBtn from '@/components/addCartBtn/AddCartBtn'
const Page = () => {

    const contentfulData = useContext(dataContext)
    // console.log(contentfulData)
    const { cartItems, setCartItems } = useContext(cartContext)

    return (<>
        <div className="page descpage  ">

            <div className="intro descintro">
                <div className="introbox">
                    <div className="heading descheading">
                        {renderTitle('7Cp1Uu5J4iKsaNtj1tyo6q', contentfulData)}
                    </div>
                    <div className="price descprice">
                        {renderPrice('7Cp1Uu5J4iKsaNtj1tyo6q', contentfulData)}

                    </div>
                    <div className="introtext">
                        <h3 className='text-lg font-bold'>Introduction</h3>
                        {renderIntro('7Cp1Uu5J4iKsaNtj1tyo6q', contentfulData)}
                    </div>
                </div>
                <div className="image descimage">
                    {renderImage('6M9cqMoRwwyoTrGWdpgyFl', 'alt', contentfulData)}
                </div>

            </div>
            <div className="counter">
                <Counter />
                <AddCartBtn onClick={() => {
                    addItemToCart(
                        productId('7Cp1Uu5J4iKsaNtj1tyo6q', contentfulData),
                        productName('7Cp1Uu5J4iKsaNtj1tyo6q', contentfulData),
                        productPrice('7Cp1Uu5J4iKsaNtj1tyo6q', contentfulData), cartItems, setCartItems
                    )
                }} />

            </div>
            <div className="overview descoverview">
                <h3 className='text-lg font-bold'>Product Overview</h3>
                {renderOverview('7Cp1Uu5J4iKsaNtj1tyo6q', contentfulData)}
            </div>

        </div>

    </>)
}
export default Page