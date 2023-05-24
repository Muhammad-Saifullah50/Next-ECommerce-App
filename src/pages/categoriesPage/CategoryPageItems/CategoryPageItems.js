import styles from '@/styles/categorypage-items.module.css'
import Image from 'next/image'
import { useContext } from "react"
import dataContext from "@/context/dataContext"
import Link from 'next/link'


const CategoryPageItems = () => {


    const contentfulData = useContext(dataContext)
    // console.log(contentfulData)

    // this function will render title of our categories.

    const renderTitle = (id) => {
        const item = contentfulData?.items?.find((item) => item.sys.id === id)

        return item ? <h3 key={item.sys.id}>{item?.fields?.title}</h3> : null

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
                    <Link href='/bandSawsPage/BandSawsPage'><button className={styles.btn}>Explore</button></Link>

                </div>
                <div className={styles.cards}>
                    {renderTitle('2FeEPy4Bwc4Rlg2WfH5Vum')}
                    {renderImage('6ccFQQznaehaIdvdkr8ooX', 'oscillatory grinder')}
                    {renderPriceRange('2FeEPy4Bwc4Rlg2WfH5Vum')}
                    <Link href='/oscillatoryGrinderPage/OscillatoryGrinderPage'><button className={styles.btn}>Explore</button></Link>

                </div>
                <div className={styles.cards}>
                    {renderTitle('3HsYBYwZOvs144Oolb1UNh')}
                    {renderImage('6vMNCHJuh4JgYhmIYkFWZQ', 'light saw')}
                    {renderPriceRange('3HsYBYwZOvs144Oolb1UNh')}
                    <Link href='/lightSawsPage/LightSawsPage'><button className={styles.btn}>Explore</button></Link>

                </div>
                <div className={styles.cards}>
                    {renderTitle('2XUe7Njq7CcFT5NLEY2qKd')}
                    {renderImage('29fPL5QFfyWPxCAZ0pkiQz', 'saw image')}
                    {renderPriceRange('2XUe7Njq7CcFT5NLEY2qKd')}
                    <Link href='/heavySawsPage/HeavySawsPage'><button className={styles.btn}>Explore</button></Link>
                </div>
                <div className={styles.cards}>
                    {renderTitle('69DvSE0PiR3lHL59J0UDAn')}
                    {renderImage('5dfnNWPtRhjV9aidvKNEGh', 'drill image')}
                    {renderPriceRange('69DvSE0PiR3lHL59J0UDAn')}
                    <Link href='/drillPage/DrillPage'><button className={styles.btn}>Explore</button></Link>

                </div>
                <div className={styles.cards}>
                    {renderTitle('1uFjdcSUky6zKKj2iW17tP')}
                    {renderImage('28uDfdCuQxxxuzCMwiXQWT', 'tool boxes')}
                    {renderPriceRange('1uFjdcSUky6zKKj2iW17tP')}
                    <Link href='/toolboxPage/ToolboxPage'><button className={styles.btn}>Explore</button></Link>


                </div>
                <div className={styles.cards}>
                    {renderTitle('3N4myZ4d9WUSKS8cQOZhEl')}
                    {renderImage('4mKPrdHCD0HCi93hgvar6G', 'air blower')}
                    {renderPriceRange('3N4myZ4d9WUSKS8cQOZhEl')}
                    <Link href='/airBlowerPage/AirBlowerPage'><button className={styles.btn}>Explore</button></Link>

                </div>
                <div className={styles.cards}>
                    {renderTitle('63IYjassGWyuEvwGmSgmr')}
                    {renderImage('1thaKzAhUAhdU3jf2XzW7w', 'angle grinder')}
                    {renderPriceRange('63IYjassGWyuEvwGmSgmr')}
                    <Link href='/angleGrinderPage/AngleGrinderPage'><button className={styles.btn}>Explore</button></Link>

                </div>
                <div className={styles.cards}>
                    {renderTitle('2LKFehcJZ2ZeP5lzZ43YkD')}
                    {renderImage('Qybq2kbrlxWZ7FcK0WUPd', 'compressor')}
                    {renderPriceRange('2LKFehcJZ2ZeP5lzZ43YkD')}
                    <Link href='/rotaryCompressorPage/RotaryCompressorPage'><button className={styles.btn}>Explore</button></Link>

                </div>
                <div className={styles.cards}>
                    {renderTitle('4bBfP2moIvvRJV8tTjPoC3')}
                    {renderImage('3cv9gZ8URV4IiI6lpmHKBE', 'polisher')}
                    {renderPriceRange('4bBfP2moIvvRJV8tTjPoC3')}
                    <Link href='/polishersPage/PolisherPage'><button className={styles.btn}>Explore</button></Link>

                </div>
                <div className={styles.cards}>
                    {renderTitle('4aFepZTkhNpPcj4MVhyAVj')}
                    {renderImage('6M9cqMoRwwyoTrGWdpgyFl', 'stapler')}
                    {renderPriceRange('4aFepZTkhNpPcj4MVhyAVj')}
                    <Link href='/staplerPage/StaplerPage'><button className={styles.btn}>Explore</button></Link>

                </div>
                <div className={styles.cards}>
                    {renderTitle('433Z0st7xwyTiXiRwR0fLr')}
                    {renderImage('2dVLKUXcxYs98j9NSnt1ag', 'miscellanous')}
                    {renderPriceRange('433Z0st7xwyTiXiRwR0fLr')}
                    <Link href='/miscPage/MiscPage'><button className={styles.btn}>Explore</button></Link>

                </div>
            </div>
        </div>
    </>)
}

export default CategoryPageItems