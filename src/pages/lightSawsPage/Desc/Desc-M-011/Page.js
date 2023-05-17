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
                        {renderTitle('7HH2GzD3ESxEFlRt3ILAwz', contentfulData)}
                    </div>
                    <div className={styles.price}>
                        {renderPrice('7HH2GzD3ESxEFlRt3ILAwz', contentfulData)}

                    </div>
                    <div className={styles.introtext}>
                        {renderIntro('7HH2GzD3ESxEFlRt3ILAwz', contentfulData)}
                    </div>
                </div>
                <div className={styles.image}>
                    {renderImage('6yZMByZ6RWK8Hse0Tw6p9k', 'alt', contentfulData)}
                </div>

            </div>
            <div className={styles.counter}>
                <Counter />
                <AddCartBtn />

            </div>
            <div className={styles.overview}>
                {renderOverview('7HH2GzD3ESxEFlRt3ILAwz', contentfulData)}
            </div>

        </div>

    </>)
}
export default Page