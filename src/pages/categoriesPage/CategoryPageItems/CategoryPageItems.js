import styles from '@/styles/categorypage-items.module.css'
import Image from 'next/image'
import { useContext } from "react"
import dataContext from "@/context/dataContext"

const CategoryPageItems = () => {

    const contentfulData = useContext(dataContext)
    console.log(contentfulData)

    // this function will render title of our categories.

    const renderTitle = (id) => {
        const item = contentfulData?.items?.find((item) => item.sys.id === id)

        return item ? <p key={item.sys.id}>{item?.fields?.title}</p> : null

    }

    // this function will render image of our categories.

    const renderImage = (id, alt) => {
        const asset = contentfulData?.includes?.Asset?.find(asset => asset.sys.id === id)

        if (asset) {
            const imageUrl = 'https:' + asset.fields.file.url

            return <Image src={imageUrl} width={144} height={144} alt={alt} key={asset.sys.id} />

        }

    }
    const renderPriceRange = (id) => {
        const item = contentfulData?.items?.find((item) => item.sys.id === id)

        return item ? <p key={item.sys.id}>{item?.fields?.price}</p> : null


    }



    return (<>
        <div className={styles.banner}>
            <h2>Categories</h2>
        </div>

        <div className={styles.categories}>
            <div className={styles.cardgrid}>
                <div className={styles.cards}>
                    {renderTitle('1r5GqxlKaejhajWlCJKBpY')}
                    {renderImage('tCrbRiWSIkuQQcSKqIFPf', 'band saw')}
                    {renderPriceRange('1r5GqxlKaejhajWlCJKBpY')}

                </div>
                <div className={styles.cards}>
                    {renderTitle('2FeEPy4Bwc4Rlg2WfH5Vum')}
                    {renderImage('6ccFQQznaehaIdvdkr8ooX', 'oscillatory grinder')}

                    {renderPriceRange('2FeEPy4Bwc4Rlg2WfH5Vum')}
                </div>
                <div className={styles.cards}>
                    {renderTitle('3HsYBYwZOvs144Oolb1UNh')}
                    {renderImage('6vMNCHJuh4JgYhmIYkFWZQ', 'light saw')}
                    {renderPriceRange('3HsYBYwZOvs144Oolb1UNh')}

                </div>
                <div className={styles.cards}>
                    {renderTitle('2XUe7Njq7CcFT5NLEY2qKd')}
                    {renderImage('29fPL5QFfyWPxCAZ0pkiQz', 'saw image')}
                    {renderPriceRange('2XUe7Njq7CcFT5NLEY2qKd')}
                </div>
                <div className={styles.cards}>
                    {renderTitle('69DvSE0PiR3lHL59J0UDAn')}
                    {renderImage('5dfnNWPtRhjV9aidvKNEGh', 'drill image')}
                    {renderPriceRange('69DvSE0PiR3lHL59J0UDAn')}

                </div>
                <div className={styles.cards}>
                    {renderTitle('1uFjdcSUky6zKKj2iW17tP')}
                    {renderImage('28uDfdCuQxxxuzCMwiXQWT', 'tool boxes')}
                    {renderPriceRange('1uFjdcSUky6zKKj2iW17tP')}

                </div>
                <div className={styles.cards}>
                    {renderTitle('3N4myZ4d9WUSKS8cQOZhEl')}
                    {renderImage('4mKPrdHCD0HCi93hgvar6G', 'air blower')}
                    {renderPriceRange('3N4myZ4d9WUSKS8cQOZhEl')}

                </div>
                <div className={styles.cards}>
                    {renderTitle('63IYjassGWyuEvwGmSgmr')}
                    {renderImage('1thaKzAhUAhdU3jf2XzW7w', 'angle grinder')}
                    {renderPriceRange('63IYjassGWyuEvwGmSgmr')}

                </div>
                <div className={styles.cards}>
                    {renderTitle('2LKFehcJZ2ZeP5lzZ43YkD')}
                    {renderImage('Qybq2kbrlxWZ7FcK0WUPd', 'compressor')}
                    {renderPriceRange('2LKFehcJZ2ZeP5lzZ43YkD')}

                </div>
                <div className={styles.cards}>
                    {renderTitle('4bBfP2moIvvRJV8tTjPoC3')}
                    {renderImage('3cv9gZ8URV4IiI6lpmHKBE', 'polisher')}
                    {renderPriceRange('4bBfP2moIvvRJV8tTjPoC3')}

                </div>
                <div className={styles.cards}>
                    {renderTitle('4aFepZTkhNpPcj4MVhyAVj')}
                    {renderImage('6M9cqMoRwwyoTrGWdpgyFl', 'stapler')}
                    {renderPriceRange('4aFepZTkhNpPcj4MVhyAVj')}

                </div>
                <div className={styles.cards}>
                    {renderTitle('433Z0st7xwyTiXiRwR0fLr')}
                    {renderImage('2dVLKUXcxYs98j9NSnt1ag', 'miscellanous')}
                    {renderPriceRange('433Z0st7xwyTiXiRwR0fLr')}

                </div>
            </div>
        </div>
    </>)
}

export default CategoryPageItems