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
                        {renderTitle('53Eq5cO1G5ZMzbhJyRL4A8', contentfulData)}
                    </div>
                    <div className={styles.price}>
                        {renderPrice('53Eq5cO1G5ZMzbhJyRL4A8', contentfulData)}

                    </div>
                    <div className={styles.introtext}>
                        {renderIntro('53Eq5cO1G5ZMzbhJyRL4A8', contentfulData)}
                    </div>
                </div>
                <div className={styles.image}>
                    {renderImage('Qybq2kbrlxWZ7FcK0WUPd', 'alt', contentfulData)}
                </div>

            </div>
            <div className={styles.counter}>
                <Counter />
                <AddCartBtn />

            </div>
            <div className={styles.overview}>
                {renderOverview('53Eq5cO1G5ZMzbhJyRL4A8', contentfulData)}
            </div>

        </div>

    </>)
}
export default Page