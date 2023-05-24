import styles from '@/styles/global-items.module.css'
import { useContext } from 'react'
import dataContext from '@/context/dataContext'
import { renderTitle, renderImage, renderPrice, renderRating } from '@/pages/bandSawsPage/Items/Items'
import Link from 'next/link'
const Items = () => {
    const contentfulData = useContext(dataContext)
    console.log(contentfulData)
    return (<>
        <div className={styles.itembox}>
        <div className={styles.items}>
                    <div className={styles.heading}>
                        {renderTitle('16z3YIPW25CSSSStfhIa4c', contentfulData)}

                        <div className={styles.rateprice}>

                            {renderPrice('16z3YIPW25CSSSStfhIa4c', contentfulData)}
                            {renderRating('16z3YIPW25CSSSStfhIa4c', contentfulData)}

                        </div>
                        
                        <Link href='/polishersPage/Desc/Desc-M-024/Desc_M_024'><button className={styles.button}>Read More</button></Link>


                    </div>

                    <div className={styles.image}>
                        {renderImage('3cv9gZ8URV4IiI6lpmHKBE', 'alt', contentfulData)}
                    </div>

                </div>
               
        </div>
    </>)
}
export default Items