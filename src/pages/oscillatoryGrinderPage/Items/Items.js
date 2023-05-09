import styles from '@/styles/oscillatory-grinders-items.module.css'
import { useContext } from 'react'
import dataContext from '@/context/dataContext'

import { renderTitle, renderImage, renderPrice, renderRating } from '@/pages/bandSawsPage/Items/Items' 

const Items = () => {
    const contentfulData = useContext(dataContext)
    console.log(contentfulData)

    return (<>
<div className={styles.itembox}>
                <div className={styles.items}>
                    {renderTitle('', contentfulData)}
                    {renderImage('', 'alt', contentfulData)}
                    {renderPrice('', contentfulData)}
                    {renderRating('', contentfulData)}
                </div>
                <div className={styles.items}>
                    {renderTitle('', contentfulData)}
                    {renderImage('', 'alt', contentfulData)}
                    {renderPrice('', contentfulData)}
                    {renderRating('', contentfulData)}
                </div>
                <div className={styles.items}>
                    {renderTitle('', contentfulData)}
                    {renderImage('', 'alt', contentfulData)}
                    {renderPrice('', contentfulData)}
                    {renderRating('', contentfulData)}
                </div>
            </div>
    </>)
}
export default Items