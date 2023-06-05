import styles from '@/styles/global-desc-page.module.css'
import dataContext from '@/context/dataContext'
import { useContext } from 'react'
import { renderTitle, renderImage, renderPrice } from '@/pages/bandSawsPage/Items/Items'
import Counter from '@/components/counter/Counter'
import AddCartBtn from '@/components/addCartBtn/AddCartBtn'
import { renderIntro, renderOverview } from '@/pages/rotaryCompressorPage/Desc/Desc-M-023/Page'
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
                        {renderTitle('74pq5ih7dMMuZZ64MKYk4b', contentfulData)}
                    </div>
                    <div className="price descprice">
                        {renderPrice('74pq5ih7dMMuZZ64MKYk4b', contentfulData)}

                    </div>
                    <div className="introtext">
                        <h3 className='text-lg font-bold'>Introduction</h3>
                        {renderIntro('74pq5ih7dMMuZZ64MKYk4b', contentfulData)}
                    </div>
                </div>
                <div className="image descimage">
                    {renderImage('3cv9gZ8URV4IiI6lpmHKBE', 'alt', contentfulData)}
                </div>

            </div>
            <div className="counter">
                <Counter />
                <AddCartBtn onClick={() => {
                    addItemToCart(
                        productId('74pq5ih7dMMuZZ64MKYk4b', contentfulData),
                        productName('74pq5ih7dMMuZZ64MKYk4b', contentfulData),
                        productPrice('74pq5ih7dMMuZZ64MKYk4b', contentfulData),cartItems,setCartItems
                    )
                }}/>
            </div>
            <div className="overview descoverview">
                <h3 className='text-lg font-bold'>Product Overview</h3>
                {renderOverview('74pq5ih7dMMuZZ64MKYk4b', contentfulData)}
            </div>

        </div>

    </>)
}
export default Page