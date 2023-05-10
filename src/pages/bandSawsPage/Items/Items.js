import styles from '@/styles/global-items.module.css'
import { useContext } from 'react'
import dataContext from '@/context/dataContext'
import Image from 'next/image'



// this function will render title of our categories.

export const renderTitle = (id, contentfulData) => {
    const item = contentfulData?.items?.find((item) => item.sys.id === id)

    return item ? <h3 key={item.sys.id}>{item?.fields?.title}</h3> : null

}

// this function will render image of our categories.

export const renderImage = (id, alt, contentfulData) => {
    const asset = contentfulData?.includes?.Asset?.find(asset => asset.sys.id === id)

    if (asset) {
        const imageUrl = 'https:' + asset.fields.file.url

        return <Image src={imageUrl} width={144} height={144} alt={alt} key={asset.sys.id} />

    }

}
export const renderPrice = (id, contentfulData) => {
    const item = contentfulData?.items?.find((item) => item.sys.id === id)

    return item ? <p key={item.sys.id}>{item?.fields?.price}</p> : null

}
export const renderRating = (id, contentfulData) => {
    const item = contentfulData?.items?.find((item) => item.sys.id === id)

    return item ? <p key={item.sys.id}>{item?.fields?.rating}</p> : null

}
const Items = () => {

    const contentfulData = useContext(dataContext)
    console.log(contentfulData)

    return (
        <>
            <div className={styles.itembox}>
                <div className={styles.items}>
                    {renderTitle('7sceAfoiIoR9lWTij4uubi', contentfulData)}
                    {renderImage('3yVcW9wxP135N934utsvAo', 'alt', contentfulData)}
                    {renderPrice('7sceAfoiIoR9lWTij4uubi', contentfulData)}
                    {renderRating('7sceAfoiIoR9lWTij4uubi', contentfulData)}
                </div>
                <div className={styles.items}>
                    {renderTitle('TmzGBkOfmuQ7dAUhQR3Rj', contentfulData)}
                    {renderImage('tCrbRiWSIkuQQcSKqIFPf', 'alt', contentfulData)}
                    {renderPrice('TmzGBkOfmuQ7dAUhQR3Rj', contentfulData)}
                    {renderRating('TmzGBkOfmuQ7dAUhQR3Rj', contentfulData)}
                </div>
                <div className={styles.items}>
                    {renderTitle('3Popbf2nkOxtmAALlR4qPm', contentfulData)}
                    {renderImage('4thrwDMdiKLXzVYfSGLHSV', 'alt', contentfulData)}
                    {renderPrice('3Popbf2nkOxtmAALlR4qPm', contentfulData)}
                    {renderRating('3Popbf2nkOxtmAALlR4qPm', contentfulData)}
                </div>
            </div>
        </>
    )
}
export default Items