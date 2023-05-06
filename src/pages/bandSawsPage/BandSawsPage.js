import styles from '@/styles/bandsawspage.module.css'
import Header from '@/components/header/Header'
import { useContext } from 'react'
import dataContext from '@/context/dataContext'
import ApiDataState from '@/context/dataState'

const BandSawsPage = () => {

    const contentfulData = useContext(dataContext)
    console.log(contentfulData)

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

    return (
        <ApiDataState>
            <>
                <Header />


                <div className={styles.banner}>
                    <h2> Dewalt Heavy Duty Band Saws </h2>
                </div>
                <div className={styles.itembox}>
                    <div className={styles.items}>

                    </div>
                    <div className={styles.items}>
                        cvcvcvcvc
                    </div>
                    <div className={styles.items}>
                        cvcvcvcvc
                    </div>
                </div>

            </>
        </ApiDataState>
    )
}

export default BandSawsPage