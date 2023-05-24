import styles from '@/styles/global-desc-page.module.css'
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
        <div className={styles.page}>

            <div className={styles.intro}>
                <div className={styles.introbox}>

                    <div className={styles.heading}>
                        {renderTitle('2rX37QL5HnsAck5gaSb08W', contentfulData)}
                    </div>
                    <div className={styles.price}>
                        {renderPrice('2rX37QL5HnsAck5gaSb08W', contentfulData)}

                    </div>
                    <div className={styles.introtext}>
                        <h3>Introduction</h3>
                        {renderIntro('2rX37QL5HnsAck5gaSb08W', contentfulData)}
                    </div>
                </div>
                <div className={styles.image}>
                    {renderImage('5aKFovUjLNS9btFTRTonTi', 'alt', contentfulData)}
                </div>

            </div>
            <div className={styles.counter}>
                <Counter />
                <AddCartBtn onClick={() => {
                    addItemToCart(
                        productId('2rX37QL5HnsAck5gaSb08W', contentfulData),
                        productName('2rX37QL5HnsAck5gaSb08W', contentfulData),
                        productPrice('2rX37QL5HnsAck5gaSb08W', contentfulData),
                        cartItems,setCartItems
                    )
                }}/>

            </div>
            <div className={styles.overview}>
                <h3>Product Overview</h3>
                {renderOverview('2rX37QL5HnsAck5gaSb08W', contentfulData)}
            </div>

        </div>

    </>)
}
export default Page