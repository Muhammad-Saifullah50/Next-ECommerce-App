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
                    {renderTitle('2Y6MmagSzRZ9mVJ5rBUbbh', contentfulData)}
                    {renderImage('6aXf5x2FQfnyTGOz3fiLkE', 'alt', contentfulData)}
                    {renderPrice('2Y6MmagSzRZ9mVJ5rBUbbh', contentfulData)}
                    {renderRating('2Y6MmagSzRZ9mVJ5rBUbbh', contentfulData)}
                </div>
                <div className={styles.items}>
                    {renderTitle('2qocGh7SWAT9hfFSH35q0V', contentfulData)}
                    {renderImage('6ccFQQznaehaIdvdkr8ooX', 'alt', contentfulData)}
                    {renderPrice('2qocGh7SWAT9hfFSH35q0V', contentfulData)}
                    {renderRating('2qocGh7SWAT9hfFSH35q0V', contentfulData)}
                </div>
            </div>
    </>)
}
export default Items