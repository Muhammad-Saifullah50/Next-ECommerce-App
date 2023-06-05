import dataContext from '@/context/dataContext'
import { useContext } from 'react'
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

    return (<>
        <div className="page descpage  ">

            <div className="intro descintro">
                <div className="introbox">
                    <div className="heading descheading">
                        {renderTitle('5Hs3AXgof4FH9YQPmTIXzE', contentfulData)}
                    </div>
                    <div className="price descprice">
                        {renderPrice('5Hs3AXgof4FH9YQPmTIXzE', contentfulData)}

                    </div>
                    <div className="introtext">
                        <h3 className='text-lg font-bold'>Introduction</h3>
                        {renderIntro('5Hs3AXgof4FH9YQPmTIXzE', contentfulData)}
                    </div>
                </div>
                <div className="image descimage">
                    {renderImage('28uDfdCuQxxxuzCMwiXQWT', 'alt', contentfulData)}
                </div>

            </div>
            <div className="counter">
                <Counter />
                <AddCartBtn onClick={() => {
                    addItemToCart(
                        productId('5Hs3AXgof4FH9YQPmTIXzE', contentfulData),
                        productName('5Hs3AXgof4FH9YQPmTIXzE', contentfulData),
                        productPrice('5Hs3AXgof4FH9YQPmTIXzE', contentfulData),
                        cartItems, setCartItems
                    )
                }} />

            </div>
            <div className="overview descoverview">
                <h3 className='text-lg font-bold'>Product Overview</h3>
                {renderOverview('5Hs3AXgof4FH9YQPmTIXzE', contentfulData)}
            </div>

        </div>

    </>)
}
export default Page