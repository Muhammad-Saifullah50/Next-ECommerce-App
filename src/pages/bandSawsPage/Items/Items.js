import styles from '@/styles/band-saws-items.module.css'
import { useContext } from 'react'
import dataContext from '@/context/dataContext'
import Image from 'next/image'


const Items = () => {

    const contentfulData = useContext(dataContext)
    console.log(contentfulData)

    // this function will render title of our categories.

    const renderTitle = (id) => {
        const item = contentfulData?.items?.find((item) => item.sys.id === id)

        return item ? <h3 key={item.sys.id}>{item?.fields?.title}</h3> : null

    }

    // this function will render image of our categories.

    const renderImage = (id, alt) => {
        const asset = contentfulData?.includes?.Asset?.find(asset => asset.sys.id === id)

        if (asset) {
            const imageUrl = 'https:' + asset.fields.file.url

            return <Image src={imageUrl} width={144} height={144} alt={alt} key={asset.sys.id} />

        }

    }
    const renderPrice = (id) => {
        const item = contentfulData?.items?.find((item) => item.sys.id === id)

        return item ? <p key={item.sys.id}>{item?.fields?.price}</p> : null

    }
    const renderRating = (id) => {
        const item = contentfulData?.items?.find((item) => item.sys.id === id)

        return item ? <p key={item.sys.id}>{item?.fields?.rating}</p> : null

    }

    return (
        <>
            <div className={styles.itembox}>
                <div className={styles.items}>
                    {renderTitle('7sceAfoiIoR9lWTij4uubi')}
                    {renderImage('3yVcW9wxP135N934utsvAo')}
                    {renderPrice('7sceAfoiIoR9lWTij4uubi')}
                    {renderRating('7sceAfoiIoR9lWTij4uubi')}
                </div>
                <div className={styles.items}>
                    {renderTitle('TmzGBkOfmuQ7dAUhQR3Rj')}
                    {renderImage('tCrbRiWSIkuQQcSKqIFPf')}
                    {renderPrice('TmzGBkOfmuQ7dAUhQR3Rj')}
                    {renderRating('TmzGBkOfmuQ7dAUhQR3Rj')}
                </div>
                <div className={styles.items}>
                    {renderTitle('3Popbf2nkOxtmAALlR4qPm')}
                    {renderImage('4thrwDMdiKLXzVYfSGLHSV')}
                    {renderPrice('3Popbf2nkOxtmAALlR4qPm')}
                    {renderRating('3Popbf2nkOxtmAALlR4qPm')}
                </div>
            </div>
        </>
    )
}
export default Items