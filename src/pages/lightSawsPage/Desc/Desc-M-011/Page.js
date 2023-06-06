import dataContext from '@/context/dataContext'
import cartContext from '@/context/cart-context/cartContext'
import { useContext } from 'react'
import { renderTitle, renderImage, renderPrice } from '@/pages/bandSawsPage/Items/Items'
import Counter from '@/components/counter/Counter'
import { addItemToCart, productId, productName, productPrice, renderIntro, renderOverview } from '@/pages/rotaryCompressorPage/Desc/Desc-M-023/Page'
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
                        {renderTitle('7HH2GzD3ESxEFlRt3ILAwz', contentfulData)}
                    </div>
                    <div className="price descprice">
                        {renderPrice('7HH2GzD3ESxEFlRt3ILAwz', contentfulData)}

                    </div>
                    <div className="introtext">
                        <h3 className='text-lg font-bold'>Introduction</h3>
                        {renderIntro('7HH2GzD3ESxEFlRt3ILAwz', contentfulData)}
                    </div>
                </div>
                <div className="image descimage">
                    {renderImage('6yZMByZ6RWK8Hse0Tw6p9k', 'alt', contentfulData)}
                </div>

            </div>
            <div className="counter">
                <Counter />
                <AddCartBtn onClick={() => {
                    addItemToCart(
                        productId('7HH2GzD3ESxEFlRt3ILAwz', contentfulData),
                        productName('7HH2GzD3ESxEFlRt3ILAwz', contentfulData),
                        productPrice('7HH2GzD3ESxEFlRt3ILAwz', contentfulData), cartItems, setCartItems
                    )

                }} />

            </div>
            <div className="overview descoverview">
                <h3 className='text-lg font-bold'>Product Overview</h3>
                {renderOverview('7HH2GzD3ESxEFlRt3ILAwz', contentfulData)}
            </div>

        </div>

    </>)
}
export default Page