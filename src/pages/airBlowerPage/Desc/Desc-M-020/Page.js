import dataContext from '@/context/dataContext'
import cartContext from '@/context/cart-context/cartContext'
import { useContext } from 'react'
import { renderTitle, renderImage, renderPrice } from '@/pages/bandSawsPage/Items/Items'
import Counter from '@/components/counter/Counter'
import { renderIntro, renderOverview } from '@/pages/rotaryCompressorPage/Desc/Desc-M-023/Page'
import AddCartBtn from '@/components/addCartBtn/AddCartBtn'
import { productId,productName,productPrice,addItemToCart } from '@/pages/rotaryCompressorPage/Desc/Desc-M-023/Page'
const Page = () => {

    const contentfulData = useContext(dataContext)
    const {cartItems, setCartItems} = useContext(cartContext)
    // console.log(contentfulData)

    return (<>
        <div className="page descpage  ">

        <div className="intro descintro">
                <div className="introbox">

                <div className="heading descheading">
                        {renderTitle('4fuf9tKRTtXcIR0xGeb0VL', contentfulData)}
                    </div>
                    <div className="price descprice">
                        {renderPrice('4fuf9tKRTtXcIR0xGeb0VL', contentfulData)}

                    </div>
                    <div className="introtext">
                    <h3 className='text-lg font-bold'>Introduction</h3>

                        {renderIntro('4fuf9tKRTtXcIR0xGeb0VL', contentfulData)}
                    </div>
                </div>
                <div className="image descimage">
                    {renderImage('5qFRqzCKszoLkIXYzxvzRq', 'alt', contentfulData)}
                </div>

            </div>
            <div className="counter">
                <Counter />
                <AddCartBtn onClick={() => {
                    addItemToCart(
                        productId('4fuf9tKRTtXcIR0xGeb0VL', contentfulData),
                        productName('4fuf9tKRTtXcIR0xGeb0VL', contentfulData),
                        productPrice('4fuf9tKRTtXcIR0xGeb0VL', contentfulData),
                        cartItems,setCartItems
                    )
                }}/>

            </div>
            <div className="overview descoverview">
            <h3  className='text-lg font-bold'>Product Overview</h3>
                {renderOverview('4fuf9tKRTtXcIR0xGeb0VL', contentfulData)}
            </div>

        </div>

    </>)
}
export default Page