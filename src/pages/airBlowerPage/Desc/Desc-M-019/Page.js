import styles from '@/styles/global-desc-page.module.css'
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
    const [cartItems, setCartItems] = useContext(cartContext)
    // console.log(contentfulData)

    return (<>
        <div className={styles.page}>

            <div className={styles.intro}>
                <div className={styles.introbox}>

                    <div className={styles.heading}>
                        {renderTitle('6kockzUuFLatyUrwsYzZam', contentfulData)}
                    </div>
                    <div className={styles.price}>
                        {renderPrice('6kockzUuFLatyUrwsYzZam', contentfulData)}

                    </div>
                    <div className={styles.introtext}>
                        <h3>Introduction</h3>
                        {renderIntro('6kockzUuFLatyUrwsYzZam', contentfulData)}
                    </div>
                </div>
                <div className={styles.image}>
                    {renderImage('4mKPrdHCD0HCi93hgvar6G', 'alt', contentfulData)}
                </div>

            </div>
            <div className={styles.counter}>
                <Counter />
                <AddCartBtn onClick={()=>{
                    addItemToCart(
                        productId('6kockzUuFLatyUrwsYzZam', contentfulData),
                        productName('6kockzUuFLatyUrwsYzZam', contentfulData),
                        productPrice('6kockzUuFLatyUrwsYzZam', contentfulData),
                        cartItems, setCartItems
                    )
                }}/>
            </div>
            <div className={styles.overview}>
                <h3>Product Overview</h3>
                {renderOverview('6kockzUuFLatyUrwsYzZam', contentfulData)}
            </div>

        </div>

    </>)
}
export default Page