import styles from '@/styles/global-desc-page.module.css'
import dataContext from '@/context/dataContext'
import { useContext } from 'react'
import { renderTitle, renderImage, renderPrice } from '@/pages/bandSawsPage/Items/Items'
import Counter from '@/components/counter/Counter'
import { renderIntro, renderOverview } from '@/pages/rotaryCompressorPage/Desc/Desc-M-023/Page'
import cartContext from '@/context/cart-context/cartContext'
import { productId, productName, productPrice,addItemToCart } from '@/pages/rotaryCompressorPage/Desc/Desc-M-023/Page'
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
                        {renderTitle('3ey30zhdsG6vhSDRfllWIf', contentfulData)}
                    </div>
                    <div className={styles.price}>
                        {renderPrice('3ey30zhdsG6vhSDRfllWIf', contentfulData)}

                    </div>
                    <div className={styles.introtext}>
                        <h3>Introduction</h3>
                        {renderIntro('3ey30zhdsG6vhSDRfllWIf', contentfulData)}
                    </div>
                </div>
                <div className={styles.image}>
                    {renderImage('6MY1fRaLmgCNRjupzne5aw', 'alt', contentfulData)}
                </div>

            </div>
            <div className={styles.counter}>
                <Counter />
                <AddCartBtn onClick={() => {
                    addItemToCart(
                        productId('3ey30zhdsG6vhSDRfllWIf', contentfulData),
                        productName('3ey30zhdsG6vhSDRfllWIf', contentfulData),
                        productPrice('3ey30zhdsG6vhSDRfllWIf', contentfulData),cartItems,setCartItems
                    )
                }}/>

            </div>
            <div className={styles.overview}>
                <h3>Product Overview</h3>
                {renderOverview('3ey30zhdsG6vhSDRfllWIf', contentfulData)}
            </div>

        </div>

    </>)
}
export default Page