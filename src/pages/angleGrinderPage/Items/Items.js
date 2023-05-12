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
                        {renderTitle('7lfNNd2Oqn1oqaRJBO51pG', contentfulData)}

                        <div className={styles.rateprice}>

                            {renderPrice('7lfNNd2Oqn1oqaRJBO51pG', contentfulData)}
                            {renderRating('7lfNNd2Oqn1oqaRJBO51pG', contentfulData)}

                        </div>
                        
                        <button className={styles.button}>Read More</button>

                    </div>

                    <div className={styles.image}>
                        {renderImage('1thaKzAhUAhdU3jf2XzW7w', 'alt', contentfulData)}
                    </div>

                </div>
                <div className={styles.items}>
                    <div className={styles.heading}>
                        {renderTitle('4NquC15vKDwmVTxJO0idyD', contentfulData)}

                        <div className={styles.rateprice}>

                            {renderPrice('4NquC15vKDwmVTxJO0idyD', contentfulData)}
                            {renderRating('4NquC15vKDwmVTxJO0idyD', contentfulData)}

                        </div>
                        
                        <button className={styles.button}>Read More</button>

                    </div>

                    <div className={styles.image}>
                        {renderImage('2m5FKJVIIXLF6S2gCedcjs', 'alt', contentfulData)}
                    </div>

                </div>
               
                
        </div>
    </>)
}
export default Items