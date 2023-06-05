import dataContext from '@/context/dataContext'
import { useContext } from 'react'
import { renderTitle, renderImage, renderPrice } from '@/pages/bandSawsPage/Items/Items'
import Counter from '@/components/counter/Counter'
import { renderIntro, renderOverview } from '@/pages/rotaryCompressorPage/Desc/Desc-M-023/Page'
import AddCartBtn from '@/components/addCartBtn/AddCartBtn'
import cartContext from '@/context/cart-context/cartContext'
import { productId, productName, productPrice,addItemToCart } from '@/pages/rotaryCompressorPage/Desc/Desc-M-023/Page'

const Page = () => {

    const contentfulData = useContext(dataContext)
    // console.log(contentfulData)
    const {cartItems, setCartItems} = useContext(cartContext)

    return (<>
         <div className="page descpage  ">

<div className="intro descintro">
    <div className="introbox">

    <div className="heading descheading">
                        {renderTitle('5BlXWkOJdmAr1AyIUhmNeK', contentfulData)}
                    </div>
                    <div className="price descprice">
                        {renderPrice('5BlXWkOJdmAr1AyIUhmNeK', contentfulData)}

                    </div>
                    <div className="introtext">
                        <h3 className='text-lg font-bold'>Introduction</h3>

                        {renderIntro('5BlXWkOJdmAr1AyIUhmNeK', contentfulData)}
                    </div>
                </div>
                <div className="image descimage">
                    {renderImage('4lccyvzqkycqNFA9lQV87p', 'alt', contentfulData)}
                </div>

            </div>
            <div className="counter">
                <Counter />
                <AddCartBtn onClick={() => {
                    addItemToCart(
                        productId('5BlXWkOJdmAr1AyIUhmNeK', contentfulData),
                        productName('5BlXWkOJdmAr1AyIUhmNeK', contentfulData),
                        productPrice('5BlXWkOJdmAr1AyIUhmNeK', contentfulData),
                        cartItems, setCartItems
                    )
                }}/>

            </div>
            <div className="overview descoverview">
                <h3 className='text-lg font-bold'>Product Overview</h3>
                {renderOverview('5BlXWkOJdmAr1AyIUhmNeK', contentfulData)}
            </div>

        </div>

    </>)
}
export default Page