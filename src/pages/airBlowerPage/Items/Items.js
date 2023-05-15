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
                        {renderTitle('30ToHMOMfi9bfsiIGfmZir', contentfulData)}

                        <div className={styles.rateprice}>

                            {renderPrice('30ToHMOMfi9bfsiIGfmZir', contentfulData)}
                            {renderRating('30ToHMOMfi9bfsiIGfmZir', contentfulData)}

                        </div>
                        
                        <Link href='/airBlowerPage/Desc/Desc-M-019/Desc_M_019'><button className={styles.button}>Read More</button></Link>


                    </div>

                    <div className={styles.image}>
                        {renderImage('4mKPrdHCD0HCi93hgvar6G', 'alt', contentfulData)}
                    </div>

                </div>
                <div className={styles.items}>
                    <div className={styles.heading}>
                        {renderTitle('1DcwcHy4PkjpdxSgJhIeOE', contentfulData)}

                        <div className={styles.rateprice}>

                            {renderPrice('1DcwcHy4PkjpdxSgJhIeOE', contentfulData)}
                            {renderRating('1DcwcHy4PkjpdxSgJhIeOE', contentfulData)}

                        </div>
                        
                        <Link href='/airBlowerPage/Desc/Desc-M-020/Desc_M_020'><button className={styles.button}>Read More</button></Link>

                    </div>

                    <div className={styles.image}>
                        {renderImage('5qFRqzCKszoLkIXYzxvzRq', 'alt', contentfulData)}
                    </div>

                </div>
        </div>
    </>)
}
export default Items