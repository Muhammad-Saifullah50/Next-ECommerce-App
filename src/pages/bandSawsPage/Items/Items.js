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

    return (
        <>
            <div className={styles.itembox}>
                <div className={styles.items}>
                    {renderTitle('7sceAfoiIoR9lWTij4uubi')}
                    {renderImage('3yVcW9wxP135N934utsvAo')}
                </div>
                <div className={styles.items}>
                    {renderTitle('TmzGBkOfmuQ7dAUhQR3Rj')}
                    {renderImage('tCrbRiWSIkuQQcSKqIFPf')}
                </div>
                <div className={styles.items}>
                    {renderTitle('3Popbf2nkOxtmAALlR4qPm')}
                    {renderImage('3yVcW9wxP135N934utsvAo')}
                </div>
            </div>
        </>
    )
}
export default Items