import styles from '@/styles/fpitems.module.css'
import Image from 'next/image'
import { useContext } from "react"
import dataContext from "@/context/dataContext"
import { renderTitle, renderImage } from '@/pages/bandSawsPage/Items/Items'
import Link from 'next/link'

const FPItems = () => {

const contentfulData = useContext(dataContext)

    

    const renderPrice = (id) => {
        const item = contentfulData?.items?.find(item => item.sys.id === id)
        return item ? <p key={item.sys.id}>{item?.fields?.price}</p> : null
    }

    return (<>
        <div className={styles.heading}>
            <h2>Frequently Purchased Items</h2>
        </div>
        <div className={styles.main}>
            <Link className={styles.link} href='/heavySawsPage/HeavySawsPage'>
            <div className={styles.cards}>


                {renderTitle('1b2jWRC4nHnINbXflCmubH',contentfulData)}
                {renderImage('29fPL5QFfyWPxCAZ0pkiQz', 'fpi3',contentfulData)}
                {renderPrice('1b2jWRC4nHnINbXflCmubH')}
            </div>
            </Link>
            <Link className={styles.link} href='staplerPage/StaplerPage'>
            <div className={styles.cards}>

                {renderTitle('5NyPZs288xX8CXZdaU2KQE',contentfulData)}
                {renderImage('6M9cqMoRwwyoTrGWdpgyFl', 'fp1',contentfulData)}
                {renderPrice('5NyPZs288xX8CXZdaU2KQE')}
            </div>
            </Link>
            <Link className={styles.link} href='bandSawsPage/BandSawsPage'>
            <div className={styles.cards}>



                {renderTitle('42C2IdgXsc62NDz5rFWJrI',contentfulData)}
                {renderImage('tCrbRiWSIkuQQcSKqIFPf', 'fp1',contentfulData)}
                {renderPrice('42C2IdgXsc62NDz5rFWJrI')}
            </div>
            </Link>
        </div>
    </>)
}
export default FPItems