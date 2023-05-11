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
                        {renderTitle('', contentfulData)}

                        <div className={styles.rateprice}>

                            {renderPrice('', contentfulData)}
                            {renderRating('', contentfulData)}

                        </div>
                        
                        <button className={styles.button}>Read More</button>

                    </div>

                    <div className={styles.image}>
                        {renderImage('', 'alt', contentfulData)}
                    </div>

                </div>
                <div className={styles.items}>
                    <div className={styles.heading}>
                        {renderTitle('', contentfulData)}

                        <div className={styles.rateprice}>

                            {renderPrice('', contentfulData)}
                            {renderRating('', contentfulData)}

                        </div>
                        
                        <button className={styles.button}>Read More</button>

                    </div>

                    <div className={styles.image}>
                        {renderImage('', 'alt', contentfulData)}
                    </div>

                </div>
                <div className={styles.items}>
                    <div className={styles.heading}>
                        {renderTitle('', contentfulData)}

                        <div className={styles.rateprice}>

                            {renderPrice('', contentfulData)}
                            {renderRating('', contentfulData)}

                        </div>
                        
                        <button className={styles.button}>Read More</button>

                    </div>

                    <div className={styles.image}>
                        {renderImage('', 'alt', contentfulData)}
                    </div>

                </div>
                <div className={styles.items}>
                    <div className={styles.heading}>
                        {renderTitle('', contentfulData)}

                        <div className={styles.rateprice}>

                            {renderPrice('', contentfulData)}
                            {renderRating('', contentfulData)}

                        </div>
                        
                        <button className={styles.button}>Read More</button>

                    </div>

                    <div className={styles.image}>
                        {renderImage('', 'alt', contentfulData)}
                    </div>

                </div>
        </div>
    </>)
}
export default Items