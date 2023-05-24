import styles from '@/styles/global-desc-page.module.css'
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
    const {cartItems, setCartItems} = useContext(cartContext)

    return (<>
        <div className={styles.page}>

            <div className={styles.intro}>
                <div className={styles.introbox}>

                    <div className={styles.heading}>
                        {renderTitle('7HH2GzD3ESxEFlRt3ILAwz', contentfulData)}
                    </div>
                    <div className={styles.price}>
                        {renderPrice('7HH2GzD3ESxEFlRt3ILAwz', contentfulData)}

                    </div>
                    <div className={styles.introtext}>
                        <h3>Introduction</h3>
                        {renderIntro('7HH2GzD3ESxEFlRt3ILAwz', contentfulData)}
                    </div>
                </div>
                <div className={styles.image}>
                    {renderImage('6yZMByZ6RWK8Hse0Tw6p9k', 'alt', contentfulData)}
                </div>

            </div>
            <div className={styles.counter}>
                <Counter />
                <AddCartBtn onClick={() => {
                    addItemToCart(
                        productId('7HH2GzD3ESxEFlRt3ILAwz', contentfulData),
                        productName('7HH2GzD3ESxEFlRt3ILAwz', contentfulData),
                        productPrice('7HH2GzD3ESxEFlRt3ILAwz', contentfulData),cartItems,setCartItems
                    )

                }}/>

            </div>
            <div className={styles.overview}>
                <h3>Product Overview</h3>
                {renderOverview('7HH2GzD3ESxEFlRt3ILAwz', contentfulData)}
            </div>

        </div>

    </>)
}
export default Page