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
                        {renderTitle('1B9FO2cSzaYVBE91bhqBpK', contentfulData)}

                        <div className={styles.rateprice}>

                            {renderPrice('1B9FO2cSzaYVBE91bhqBpK', contentfulData)}
                            {renderRating('1B9FO2cSzaYVBE91bhqBpK', contentfulData)}

                        </div>
                        
                        <Link href='/miscPage/Desc/Desc-M-027/Desc_M_027'><button className={styles.button}>Read More</button></Link>

                    </div>

                    <div className={styles.image}>
                        {renderImage('6DwL4CdFT89zdilYLRHs9J', 'alt', contentfulData)}
                    </div>

                </div>
                <div className={styles.items}>
                    <div className={styles.heading}>
                        {renderTitle('69OXUd76z9vfh6N2fCGlqT', contentfulData)}

                        <div className={styles.rateprice}>

                            {renderPrice('69OXUd76z9vfh6N2fCGlqT', contentfulData)}
                            {renderRating('69OXUd76z9vfh6N2fCGlqT', contentfulData)}

                        </div>
                        
                        <Link href='/miscPage/Desc/Desc-M-026/Desc_M_026'><button className={styles.button}>Read More</button></Link>

                    </div>

                    <div className={styles.image}>
                        {renderImage('2dVLKUXcxYs98j9NSnt1ag', 'alt', contentfulData)}
                    </div>

                </div>
              
        </div>
    </>)
}
export default Items