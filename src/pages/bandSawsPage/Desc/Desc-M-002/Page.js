import styles from '@/styles/global-desc-page.module.css'
import dataContext from '@/context/dataContext'
import cartContext from '@/context/cart-context/cartContext'
import { productId, productName, productPrice,addItemToCart } from '@/pages/rotaryCompressorPage/Desc/Desc-M-023/Page'
import { useContext } from 'react'
import { renderTitle, renderImage, renderPrice } from '@/pages/bandSawsPage/Items/Items'
import Counter from '@/components/counter/Counter'
import { renderIntro, renderOverview } from '@/pages/rotaryCompressorPage/Desc/Desc-M-023/Page'
import AddCartBtn from '@/components/addCartBtn/AddCartBtn'
const Page = () => {

    const contentfulData = useContext(dataContext)
    // console.log(contentfulData)
    const [cartItems, setCartItems] = useContext(cartContext)

    return (<>
        <div className={styles.page}>

            <div className={styles.intro}>
                <div className={styles.introbox}>

                    <div className={styles.heading}>
                        {renderTitle('6c4jy1kltQ99MIQkKS0I6L', contentfulData)}
                    </div>
                    <div className={styles.price}>
                        {renderPrice('6c4jy1kltQ99MIQkKS0I6L', contentfulData)}

                    </div>
                    <div className={styles.introtext}>
                        <h3>Interoduction</h3>
                        {renderIntro('6c4jy1kltQ99MIQkKS0I6L', contentfulData)}
                    </div>
                </div>
                <div className={styles.image}>
                    {renderImage('4thrwDMdiKLXzVYfSGLHSV', 'alt', contentfulData)}
                </div>

            </div>
            <div className={styles.counter}>
                <Counter />
                <AddCartBtn onClick={() => {
                    addItemToCart(
                        productId('6c4jy1kltQ99MIQkKS0I6L', contentfulData),
                        productName('6c4jy1kltQ99MIQkKS0I6L', contentfulData),
                        productPrice('6c4jy1kltQ99MIQkKS0I6L', contentfulData),
                        cartItems,setCartItems
                    )
                }}/>

            </div>
            <div className={styles.overview}>
                <h3>Product Overview</h3>
                {renderOverview('6c4jy1kltQ99MIQkKS0I6L', contentfulData)}
            </div>

        </div>

    </>)
}
export default Page