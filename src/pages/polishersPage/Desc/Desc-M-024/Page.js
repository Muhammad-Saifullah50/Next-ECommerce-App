import styles from '@/styles/global-desc-page.module.css'
import dataContext from '@/context/dataContext'
import { useContext } from 'react'
import { renderTitle, renderImage, renderPrice } from '@/pages/bandSawsPage/Items/Items'
import Counter from '@/components/counter/Counter'
import AddCartBtn from '@/components/addCartBtn/AddCartBtn'
import { renderIntro, renderOverview } from '@/pages/rotaryCompressorPage/Desc/Desc-M-023/Page'

const Page = () => {

    const contentfulData = useContext(dataContext)
    // console.log(contentfulData)

    return (<>
        <div className={styles.page}>

            <div className={styles.intro}>
                <div className={styles.introbox}>

                    <div className={styles.heading}>
                        {renderTitle('74pq5ih7dMMuZZ64MKYk4b', contentfulData)}
                    </div>
                    <div className={styles.price}>
                        {renderPrice('74pq5ih7dMMuZZ64MKYk4b', contentfulData)}

                    </div>
                    <div className={styles.introtext}>
                        {renderIntro('74pq5ih7dMMuZZ64MKYk4b', contentfulData)}
                    </div>
                </div>
                <div className={styles.image}>
                    {renderImage('3cv9gZ8URV4IiI6lpmHKBE', 'alt', contentfulData)}
                </div>

            </div>
            <div className={styles.counter}>
                <Counter />
                <AddCartBtn />

            </div>
            <div className={styles.overview}>
                {renderOverview('74pq5ih7dMMuZZ64MKYk4b', contentfulData)}
            </div>

        </div>

    </>)
}
export default Page