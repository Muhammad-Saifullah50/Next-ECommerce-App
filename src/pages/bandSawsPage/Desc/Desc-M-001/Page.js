import dataContext from '@/context/dataContext'
import cartContext from '@/context/cart-context/cartContext'
import { useContext } from 'react'
import { renderTitle, renderImage, renderPrice } from '@/pages/bandSawsPage/Items/Items'
import Counter from '@/components/counter/Counter'
import { renderIntro, renderOverview } from '@/pages/rotaryCompressorPage/Desc/Desc-M-023/Page'
import AddCartBtn from '@/components/addCartBtn/AddCartBtn'
import { productId,productName, productPrice,addItemToCart } from '@/pages/rotaryCompressorPage/Desc/Desc-M-023/Page'
const Page = () => {

    const contentfulData = useContext(dataContext)
    // console.log(contentfulData)
    const {cartItems, setCartItems} = useContext(cartContext)

    return (<>
         <div className="page descpage  ">

<div className="intro descintro">
                <div className={styles.introbox}>

                <div className="heading descheading">
                        {renderTitle('23OuUIipZC3nsBWFBW0lKv', contentfulData)}
                    </div>
                    <div className="price descprice">
                        {renderPrice('23OuUIipZC3nsBWFBW0lKv', contentfulData)}

                    </div>
                    <div className={styles.introtext}>
                    <h3 className='text-lg font-bold'>Introduction</h3>
                        {renderIntro('23OuUIipZC3nsBWFBW0lKv', contentfulData)}
                    </div>
                </div>
                <div className="image descimage">
                    {renderImage('3yVcW9wxP135N934utsvAo', 'alt', contentfulData)}
                </div>

            </div>
            <div className={styles.counter}>
                <Counter />
                <AddCartBtn  onClick={() => {
                    addItemToCart(
                        productId('23OuUIipZC3nsBWFBW0lKv', contentfulData),
                        productName('23OuUIipZC3nsBWFBW0lKv', contentfulData),
                        productPrice('23OuUIipZC3nsBWFBW0lKv', contentfulData),
                        cartItems,setCartItems
                    )
                }}/>

            </div>
            <div className="overview descoverview">
                <h3 className='text-lg font-bold'>Product Overview</h3>
                {renderOverview('23OuUIipZC3nsBWFBW0lKv', contentfulData)}
            </div>

        </div>

    </>)
}
export default Page