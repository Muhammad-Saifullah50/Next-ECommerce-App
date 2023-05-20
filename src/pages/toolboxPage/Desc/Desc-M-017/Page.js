import styles from '@/styles/global-desc-page.module.css'
import dataContext from '@/context/dataContext'
import { useContext } from 'react'
import { renderTitle, renderImage, renderPrice } from '@/pages/bandSawsPage/Items/Items'
import Counter from '@/components/counter/Counter'
import { renderIntro, renderOverview } from '@/pages/rotaryCompressorPage/Desc/Desc-M-023/Page'
import AddCartBtn from '@/components/addCartBtn/AddCartBtn'
const Page = () => {

    const contentfulData = useContext(dataContext)
    // console.log(contentfulData)

    return (<>
        <div className={styles.page}>

            <div className={styles.intro}>
                <div className={styles.introbox}>

                    <div className={styles.heading}>
                        {renderTitle('5Hs3AXgof4FH9YQPmTIXzE', contentfulData)}
                    </div>
                    <div className={styles.price}>
                        {renderPrice('5Hs3AXgof4FH9YQPmTIXzE', contentfulData)}

                    </div>
                    <div className={styles.introtext}>
                        <h3>Introduction</h3>
                        {renderIntro('5Hs3AXgof4FH9YQPmTIXzE', contentfulData)}
                    </div>
                </div>
                <div className={styles.image}>
                    {renderImage('28uDfdCuQxxxuzCMwiXQWT', 'alt', contentfulData)}
                </div>

            </div>
            <div className={styles.counter}>
                <Counter />
                <AddCartBtn />

            </div>
            <div className={styles.overview}>
                <h3>Product Overview</h3>
                {renderOverview('5Hs3AXgof4FH9YQPmTIXzE', contentfulData)}
            </div>

        </div>

    </>)
}
export default Page