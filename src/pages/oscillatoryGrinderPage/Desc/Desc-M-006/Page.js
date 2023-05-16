import styles from '@/styles/global-desc-page.module.css'
import dataContext from '@/context/dataContext'
import { useContext } from 'react'
import { renderTitle, renderImage, renderPrice } from '@/pages/bandSawsPage/Items/Items'
import Counter from '@/components/counter/Counter'
import { renderIntro, renderOverview } from '@/pages/rotaryCompressorPage/Desc/Desc-M-023/Page'

const Page = () => {

    const contentfulData = useContext(dataContext)
    // console.log(contentfulData)

    return (<>
        <div className={styles.page}>

            <div className={styles.intro}>
                <div className={styles.introbox}>

                    <div className={styles.heading}>
                        {renderTitle('2iz1IxUacC0wEP3vceWA1I', contentfulData)}
                    </div>
                    <div className={styles.price}>
                        {renderPrice('2iz1IxUacC0wEP3vceWA1I', contentfulData)}

                    </div>
                    <div className={styles.introtext}>
                        {renderIntro('2iz1IxUacC0wEP3vceWA1I', contentfulData)}
                    </div>
                </div>
                <div className={styles.image}>
                    {renderImage('6aXf5x2FQfnyTGOz3fiLkE', 'alt', contentfulData)}
                </div>

            </div>
            <div className={styles.counter}>
                <Counter />
            </div>
            <div className={styles.overview}>
                {renderOverview('2iz1IxUacC0wEP3vceWA1I', contentfulData)}
            </div>

        </div>

    </>)
}
export default Page