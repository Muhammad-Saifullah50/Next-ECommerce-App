import styles from '@/styles/global-items.module.css'
import { useContext } from 'react'
import dataContext from '@/context/dataContext'
import Image from 'next/image'
import Link from 'next/link'



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

    return item ? <p key={item.sys.id}>Price: {item?.fields?.price}</p> : null;


}
export const renderRating = (id, contentfulData) => {
    const item = contentfulData?.items?.find((item) => item.sys.id === id)

    return item ? <p key={item.sys.id}>Rating: {item?.fields?.rating}</p> : null

}
const Items = () => {

    const contentfulData = useContext(dataContext)
    console.log(contentfulData)

    return (
        <>
            <div className={styles.itembox}>
                <div className={styles.items}>
                    <div className={styles.heading}>
                        {renderTitle('7sceAfoiIoR9lWTij4uubi', contentfulData)}

                        <div className={styles.rateprice}>

                            {renderPrice('7sceAfoiIoR9lWTij4uubi', contentfulData)}
                            {renderRating('7sceAfoiIoR9lWTij4uubi', contentfulData)}

                        </div>
                        
                        <Link href='/bandSawsPage/Desc/Desc-M-001/Desc_M_001'><button className={styles.button}>Read More</button></Link>

                    </div>

                    <div className={styles.image}>
                        {renderImage('3yVcW9wxP135N934utsvAo', 'alt', contentfulData)}
                    </div>

                </div>
                <div className={styles.items}>
                    <div className={styles.heading}>
                        {renderTitle('TmzGBkOfmuQ7dAUhQR3Rj', contentfulData)}

                        <div className={styles.rateprice}>

                            {renderPrice('TmzGBkOfmuQ7dAUhQR3Rj', contentfulData)}
                            {renderRating('TmzGBkOfmuQ7dAUhQR3Rj', contentfulData)}

                        </div>
                        
                        <Link href='/bandSawsPage/Desc/Desc-M-003/Desc_M_003'><button className={styles.button}>Read More</button></Link>

                    </div>

                    <div className={styles.image}>
                        {renderImage('tCrbRiWSIkuQQcSKqIFPf', 'alt', contentfulData)}
                    </div>

                </div>
                <div className={styles.items}>
                    <div className={styles.heading}>
                        {renderTitle('3Popbf2nkOxtmAALlR4qPm', contentfulData)}

                        <div className={styles.rateprice}>

                            {renderPrice('3Popbf2nkOxtmAALlR4qPm', contentfulData)}
                            {renderRating('3Popbf2nkOxtmAALlR4qPm', contentfulData)}

                        </div>
                        
                        <Link href='/bandSawsPage/Desc/Desc-M-002/Desc_M_002'><button className={styles.button}>Read More</button></Link>

                    </div>

                    <div className={styles.image}>
                        {renderImage('4thrwDMdiKLXzVYfSGLHSV', 'alt', contentfulData)}
                    </div>

                </div>
            </div>
        </>
    )
}
export default Items


