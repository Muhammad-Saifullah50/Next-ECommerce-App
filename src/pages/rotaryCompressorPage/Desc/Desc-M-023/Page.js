import styles from '@/styles/global-desc-page.module.css'
import dataContext from '@/context/dataContext'
import cartContext from '@/context/cart-context/cartContext'
import { useContext } from 'react'
import { renderTitle, renderImage, renderPrice } from '@/pages/bandSawsPage/Items/Items'
import Counter from '@/components/counter/Counter'
import AddCartBtn from '@/components/addCartBtn/AddCartBtn'

export const renderIntro = (id, contentfulData) => {
    const item = contentfulData?.items?.find((item) => item.sys.id === id)

    let arrays = item?.fields?.introduction?.content
    // console.log(arrays)

    let values = arrays?.map(obj => obj.content[0].value);

    let intro = values?.join('\r\n \r\n');

    return item ? <p key={item.sys.id}>{intro}</p> : null;

}
export const renderOverview = (id, contentfulData) => {
    const item = contentfulData?.items?.find((item) => item.sys.id === id)

    // console.log(item)
    let arrays = item?.fields?.overview?.content
    // console.log(arrays)

    let values = arrays?.map(obj => obj.content[0].value);

    let overview = values?.join('\r\n \r\n');

    return item ? <p key={item.sys.id}>{overview}</p> : null;
}

//----------------functions for cart related stuff-------------------------


export const productId = (id, contentfulData) => {
    const item = contentfulData?.items?.find((item) => item.sys.id === id)

    // console.log(item.sys.id)
    return item.sys.id

}
export const productName = (id, contentfulData) => {
    const item = contentfulData?.items?.find((item) => item.sys.id === id)
    // console.log(item?.fields?.title)
    return item?.fields?.title
}
export const productPrice = (id, contentfulData) => {
    const item = contentfulData?.items?.find((item) => item.sys.id === id)
    // console.log(item?.fields?.price)
    return item?.fields?.price
}

export const addItemToCart = (id, name, price, cartItems, setCartItems) => {

    const newItem = {
        id: id,
        name: name,
        price: price,
        quantity: 1

    }
    setCartItems([...cartItems, newItem]);
    // console.log([cartItems])

    // console.log('Updated cart items:', cartItems);
}


const Page = () => {

    const contentfulData = useContext(dataContext)
    const {cartItems, setCartItems} = useContext(cartContext)

    // console.log(contentfulData)

    return (<>
        <div className={styles.page}>

            <div className={styles.intro}>
                <div className={styles.introbox}>

                    <div className={styles.heading}>
                        {renderTitle('53Eq5cO1G5ZMzbhJyRL4A8', contentfulData)}
                    </div>
                    <div className={styles.price}>
                        {renderPrice('53Eq5cO1G5ZMzbhJyRL4A8', contentfulData)}

                    </div>
                    <div className={styles.introtext}>
                        <h3>Introduction</h3>
                        {renderIntro('53Eq5cO1G5ZMzbhJyRL4A8', contentfulData)}
                    </div>
                </div>
                <div className={styles.image}>
                    {renderImage('Qybq2kbrlxWZ7FcK0WUPd', 'alt', contentfulData)}
                </div>

            </div>
            <div className={styles.counter}>
                <Counter />


                <AddCartBtn onClick={() => addItemToCart(
                    productId('53Eq5cO1G5ZMzbhJyRL4A8', contentfulData),
                    productName('53Eq5cO1G5ZMzbhJyRL4A8', contentfulData),
                    productPrice('53Eq5cO1G5ZMzbhJyRL4A8', contentfulData), cartItems, setCartItems)
                } />

            </div>
            <div className={styles.overview}>
                <h3>Product Overview</h3>
                {renderOverview('53Eq5cO1G5ZMzbhJyRL4A8', contentfulData)}
            </div>

        </div>

    </>)
}
export default Page