import styles from '@/styles/global-items.module.css'
import { useContext } from 'react'
import dataContext from '@/context/dataContext'
import { renderTitle, renderImage, renderPrice, renderRating } from '@/pages/bandSawsPage/Items/Items'

const Items = () => {
    const contentfulData = useContext(dataContext)
    console.log(contentfulData)
    return (<>
        <div className={styles.itembox}>
        <div className={styles.items}>
                    <div className={styles.heading}>
                        {renderTitle('7K1xki7wUYZiNBH3YQG1sU', contentfulData)}

                        <div className={styles.rateprice}>

                            {renderPrice('7K1xki7wUYZiNBH3YQG1sU', contentfulData)}
                            {renderRating('7K1xki7wUYZiNBH3YQG1sU', contentfulData)}

                        </div>
                        
                        <button className={styles.button}>Read More</button>

                    </div>

                    <div className={styles.image}>
                        {renderImage('5dfnNWPtRhjV9aidvKNEGh', 'alt', contentfulData)}
                    </div>

                </div>
                <div className={styles.items}>
                    <div className={styles.heading}>
                        {renderTitle('2lrW0d63syMBPJni6GjN5R', contentfulData)}

                        <div className={styles.rateprice}>

                            {renderPrice('2lrW0d63syMBPJni6GjN5R', contentfulData)}
                            {renderRating('2lrW0d63syMBPJni6GjN5R', contentfulData)}

                        </div>
                        
                        <button className={styles.button}>Read More</button>

                    </div>

                    <div className={styles.image}>
                        {renderImage('5aKFovUjLNS9btFTRTonTi', 'alt', contentfulData)}
                    </div>

                </div>
               
        </div>
    </>)
}
export default Items