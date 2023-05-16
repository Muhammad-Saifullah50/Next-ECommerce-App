import styles from '@/styles/global-desc-page.module.css'
import dataContext from '@/context/dataContext'
import { useContext } from 'react'
import { renderTitle, renderImage, renderPrice } from '@/pages/bandSawsPage/Items/Items'
import Counter from '@/components/counter/Counter'
export const renderIntro = (id, contentfulData) => {
    const item = contentfulData?.items?.find((item) => item.sys.id === id)

    let arrays = item?.fields?.introduction?.content
        // console.log(arrays)

        let values = arrays?.map(obj => obj.content[0].value);

        let intro = values?.join('\r\n \r\n');

        return item ? <p key={item.sys.id}>{intro}</p> : null;

}
export const renderOverview = (id, contentfulData) => {
    const item = contentfulData?.items?.find((item) => item.sys.id === id)
    
        console.log(item)
        let arrays = item?.fields?.overview?.content
        // console.log(arrays)

        let values = arrays?.map(obj => obj.content[0].value);

        let overview = values?.join('\r\n \r\n');

        return item ? <p key={item.sys.id}>{overview}</p> : null;
    }


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
            </div>
            <div className={styles.overview}>
                {renderOverview('53Eq5cO1G5ZMzbhJyRL4A8', contentfulData)}
            </div>

        </div>

    </>)
}
export default Page