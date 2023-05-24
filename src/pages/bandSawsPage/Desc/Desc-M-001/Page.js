import styles from '@/styles/global-desc-page.module.css'
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
        <div className={styles.page}>

            <div className={styles.intro}>
                <div className={styles.introbox}>

                    <div className={styles.heading}>
                        {renderTitle('23OuUIipZC3nsBWFBW0lKv', contentfulData)}
                    </div>
                    <div className={styles.price}>
                        {renderPrice('23OuUIipZC3nsBWFBW0lKv', contentfulData)}

                    </div>
                    <div className={styles.introtext}>
                        <h3>Introduction</h3>
                        {renderIntro('23OuUIipZC3nsBWFBW0lKv', contentfulData)}
                    </div>
                </div>
                <div className={styles.image}>
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
            <div className={styles.overview}>
                <h3>Product Overview</h3>
                {renderOverview('23OuUIipZC3nsBWFBW0lKv', contentfulData)}
            </div>

        </div>

    </>)
}
export default Page