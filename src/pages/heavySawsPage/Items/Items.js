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
                        {renderTitle('67mPkt3Wjgo1TynGEDfNVc', contentfulData)}

                        <div className={styles.rateprice}>

                            {renderPrice('67mPkt3Wjgo1TynGEDfNVc', contentfulData)}
                            {renderRating('67mPkt3Wjgo1TynGEDfNVc', contentfulData)}

                        </div>
                        
                        <Link href='/heavySawsPage/Desc/Desc-M-012/Desc_M_012'><button className={styles.button}>Read More</button></Link>

                    </div>

                    <div className={styles.image}>
                        {renderImage('29fPL5QFfyWPxCAZ0pkiQz', 'alt', contentfulData)}
                    </div>

                </div>
                <div className={styles.items}>
                    <div className={styles.heading}>
                        {renderTitle('6ighvhahV902BZKeG2Nu03', contentfulData)}

                        <div className={styles.rateprice}>

                            {renderPrice('6ighvhahV902BZKeG2Nu03', contentfulData)}
                            {renderRating('6ighvhahV902BZKeG2Nu03', contentfulData)}

                        </div>
                        
                        <Link href='/heavySawsPage/Desc/Desc-M-013/Desc_M_013'><button className={styles.button}>Read More</button></Link>

                    </div>

                    <div className={styles.image}>
                        {renderImage('4lccyvzqkycqNFA9lQV87p', 'alt', contentfulData)}
                    </div>

                </div>
                <div className={styles.items}>
                    <div className={styles.heading}>
                        {renderTitle('4VzIsrlOhwM9FOkhTcjzPh', contentfulData)}

                        <div className={styles.rateprice}>

                            {renderPrice('4VzIsrlOhwM9FOkhTcjzPh', contentfulData)}
                            {renderRating('4VzIsrlOhwM9FOkhTcjzPh', contentfulData)}

                        </div>
                        
                        <Link href='/heavySawsPage/Desc/Desc-M-014/Desc_M_014'><button className={styles.button}>Read More</button></Link>

                    </div>

                    <div className={styles.image}>
                        {renderImage('MH5bzjSROfpwPKAZou9Jt', 'alt', contentfulData)}
                    </div>

                </div>
               
        </div>
    </>)
}
export default Items