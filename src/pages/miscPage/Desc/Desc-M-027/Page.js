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
                        {renderTitle('1NrzDH1i871nIp9nCZ8eTb', contentfulData)}
                    </div>
                    <div className="price descprice">
                        {renderPrice('1NrzDH1i871nIp9nCZ8eTb', contentfulData)}

                    </div>
                    <div className="introtext">
                        <h3 className='text-lg font-bold'>Introduction</h3>
                        {renderIntro('1NrzDH1i871nIp9nCZ8eTb', contentfulData)}
                    </div>
                </div>
                <div className="image descimage">
                    {renderImage('6DwL4CdFT89zdilYLRHs9J', 'alt', contentfulData)}
                </div>

            </div>
            <div className={styles.counter}>
                <Counter />
                <AddCartBtn onClick={() => {
                    addItemToCart(
                        productId('1NrzDH1i871nIp9nCZ8eTb', contentfulData),
                        productName('1NrzDH1i871nIp9nCZ8eTb', contentfulData),
                        productPrice('1NrzDH1i871nIp9nCZ8eTb', contentfulData), cartItems, setCartItems
                    )
                }} />

            </div>
            <div className="overview descoverview">
                <h3 className='text-lg font-bold'>Product Overview</h3>
                {renderOverview('1NrzDH1i871nIp9nCZ8eTb', contentfulData)}
            </div>

        </div>

    </>)
}
export default Page