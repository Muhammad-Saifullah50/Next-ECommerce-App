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
                        {renderTitle('nkIeVWCpb2ZqcUwApG9Cc', contentfulData)}
                    </div>
                    <div className={styles.price}>
                        {renderPrice('nkIeVWCpb2ZqcUwApG9Cc', contentfulData)}

                    </div>
                    <div className={styles.introtext}>
                        <h3>Introduction</h3>
                        {renderIntro('nkIeVWCpb2ZqcUwApG9Cc', contentfulData)}
                    </div>
                </div>
                <div className={styles.image}>
                    {renderImage('MH5bzjSROfpwPKAZou9Jt', 'alt', contentfulData)}
                </div>

            </div>
            <div className={styles.counter}>
                <Counter />
                <AddCartBtn />

            </div>
            <div className={styles.overview}>
                <h3>Product Overview</h3>
                {renderOverview('nkIeVWCpb2ZqcUwApG9Cc', contentfulData)}
            </div>

        </div>

    </>)
}
export default Page