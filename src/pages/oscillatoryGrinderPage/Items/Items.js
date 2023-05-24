import styles from '@/styles/global-items.module.css'
import { useContext } from 'react'
import dataContext from '@/context/dataContext'
import Link from 'next/link'
import { renderTitle, renderImage, renderPrice, renderRating } from '@/pages/bandSawsPage/Items/Items'

const Items = () => {
    const contentfulData = useContext(dataContext)
    // console.log(contentfulData)

    return (<>
        <div className={styles.itembox}>

            <div className={styles.items}>
                <div className={styles.heading}>
                    {renderTitle('2Y6MmagSzRZ9mVJ5rBUbbh', contentfulData)}

                    <div className={styles.rateprice}>

                        {renderPrice('2Y6MmagSzRZ9mVJ5rBUbbh', contentfulData)}
                        {renderRating('2Y6MmagSzRZ9mVJ5rBUbbh', contentfulData)}

                    </div>

                    <Link href='/oscillatoryGrinderPage/Desc/Desc-M-006/Desc_M_006'><button className={styles.button}>Read More</button></Link>

                </div>

                <div className={styles.image}>
                    {renderImage('6aXf5x2FQfnyTGOz3fiLkE', 'alt', contentfulData)}
                </div>

            </div>
            <div className={styles.items}>
                    <div className={styles.heading}>
                        {renderTitle('2qocGh7SWAT9hfFSH35q0V', contentfulData)}

                        <div className={styles.rateprice}>

                            {renderPrice('2qocGh7SWAT9hfFSH35q0V', contentfulData)}
                            {renderRating('2qocGh7SWAT9hfFSH35q0V', contentfulData)}

                        </div>
                        
                        <Link href='/oscillatoryGrinderPage/Desc/Desc-M-005/Desc_M_005'><button className={styles.button}>Read More</button></Link>

                    </div>

                    <div className={styles.image}>
                        {renderImage('6ccFQQznaehaIdvdkr8ooX', 'alt', contentfulData)}
                    </div>

                </div>
        </div>
    </>)
}
export default Items
