import styles from '@/styles/global-items.module.css'
import { useContext } from 'react'
import dataContext from '@/context/dataContext'
import { renderTitle, renderImage, renderPrice, renderRating } from '@/pages/bandSawsPage/Items/Items'
import Link from 'next/link'

const Items = () => {
    const contentfulData = useContext(dataContext)
    // console.log(contentfulData)
    return (<>
        <div className={styles.itembox}>
        <div className={styles.items}>
                    <div className={styles.heading}>
                        {renderTitle('6ignZvImEqa5T9fq3d6bT5', contentfulData)}

                        <div className={styles.rateprice}>

                            {renderPrice('6ignZvImEqa5T9fq3d6bT5', contentfulData)}
                            {renderRating('6ignZvImEqa5T9fq3d6bT5', contentfulData)}

                        </div>
                        
                        <Link href='/staplerPage/Desc/Desc-M-025/Desc_M_025'><button className={styles.button}>Read More</button></Link>

                    </div>

                    <div className={styles.image}>
                        {renderImage('28uDfdCuQxxxuzCMwiXQWT', 'alt', contentfulData)}
                    </div>

                </div>
                
                <div className={styles.items}>
                    <div className={styles.heading}>
                        {renderTitle('1YfSGDjWL7AKorlePG62GM', contentfulData)}

                        <div className={styles.rateprice}>

                            {renderPrice('1YfSGDjWL7AKorlePG62GM', contentfulData)}
                            {renderRating('1YfSGDjWL7AKorlePG62GM', contentfulData)}

                        </div>
                        
                        <Link href='/toolboxPage/Desc/Desc-M-018/Desc_M_018'><button className={styles.button}>Read More</button></Link>

                    </div>

                    <div className={styles.image}>
                        {renderImage('6Vu4RfvN2ea0L2rJfjK5vm', 'alt', contentfulData)}
                    </div>

                </div>
        </div>
    </>)
}
export default Items