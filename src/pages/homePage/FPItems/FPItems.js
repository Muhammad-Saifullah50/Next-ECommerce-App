import styles from '@/styles/fpitems.module.css'
import Image from 'next/image'
import { useContext } from "react"
import dataContext from "@/context/dataContext"


const FPItems = () => {

const contentfulData = useContext(dataContext)

    const renderTitle = (id) => {
        const item = contentfulData?.items?.find(item => item.sys.id === id)
        return item ? <h6 key={item.sys.id}>{item?.fields?.title}</h6> : null
    }

    const renderImage = (id, alt) => {

        const asset = contentfulData?.includes?.Asset?.find(asset => asset.sys.id === id)

        if (asset) {
            const imageUrl = 'https:' + asset.fields.file.url

            return <Image src={imageUrl} width={144} height={144} alt={alt} key={asset.sys.id}></Image>

        }
    }

    const renderPrice = (id) => {
        const item = contentfulData?.items?.find(item => item.sys.id === id)
        return item ? <p key={item.sys.id}>{item?.fields?.price}</p> : null
    }

    return (<>
        <div className={styles.heading}>
            <h2>Frequently Purchased Items</h2>
        </div>
        <div className={styles.main}>
            <div className={styles.cards}>


                {renderTitle('1b2jWRC4nHnINbXflCmubH')}
                {renderImage('29fPL5QFfyWPxCAZ0pkiQz', 'fpi3')}
                {renderPrice('1b2jWRC4nHnINbXflCmubH')}
            </div>
            <div className={styles.cards}>

                {renderTitle('5NyPZs288xX8CXZdaU2KQE')}
                {renderImage('6M9cqMoRwwyoTrGWdpgyFl', 'fp1')}
                {renderPrice('5NyPZs288xX8CXZdaU2KQE')}
            </div>

            <div className={styles.cards}>



                {renderTitle('42C2IdgXsc62NDz5rFWJrI')}
                {renderImage('tCrbRiWSIkuQQcSKqIFPf', 'fp1')}
                {renderPrice('42C2IdgXsc62NDz5rFWJrI')}
            </div>
        </div>
    </>)
}
export default FPItems