import styles from '@/styles/global-desc-page.module.css'
import dataContext from '@/context/dataContext'
import cartContext from '@/context/cart-context/cartContext'
import { useContext } from 'react'
import { renderTitle, renderImage, renderPrice } from '@/pages/bandSawsPage/Items/Items'
import Counter from '@/components/counter/Counter'
import { renderIntro, renderOverview } from '@/pages/rotaryCompressorPage/Desc/Desc-M-023/Page'
import AddCartBtn from '@/components/addCartBtn/AddCartBtn'
import { productId,productName,productPrice, addItemToCart } from '@/pages/rotaryCompressorPage/Desc/Desc-M-023/Page'
const Page = () => {

    const contentfulData = useContext(dataContext)
    // console.log(contentfulData)
    const {cartItems, setCartItems} = useContext(cartContext)

    return (<>
        <div className={styles.page}>

            <div className={styles.intro}>
                <div className={styles.introbox}>

                    <div className={styles.heading}>
                        {renderTitle('2jmUDvXuiBjBkBRjWHAvgV', contentfulData)}
                    </div>
                    <div className={styles.price}>
                        {renderPrice('2jmUDvXuiBjBkBRjWHAvgV', contentfulData)}

                    </div>
                    <div className={styles.introtext}>
                        {renderIntro('2jmUDvXuiBjBkBRjWHAvgV', contentfulData)}
                    </div>
                </div>
                <div className={styles.image}>
                    {renderImage('1thaKzAhUAhdU3jf2XzW7w', 'alt', contentfulData)}
                </div>

            </div>
            <div className={styles.counter}>
                <Counter />
                <AddCartBtn onClick={() => {
                    addItemToCart(
                        productId('2jmUDvXuiBjBkBRjWHAvgV', contentfulData),
                        productName('2jmUDvXuiBjBkBRjWHAvgV', contentfulData),
                        productPrice('2jmUDvXuiBjBkBRjWHAvgV', contentfulData),
                        cartItems,setCartItems
                    )
                }}/>

            </div>
            <div className={styles.overview}>
                {renderOverview('2jmUDvXuiBjBkBRjWHAvgV', contentfulData)}
            </div>

        </div>

    </>)
}
export default Page