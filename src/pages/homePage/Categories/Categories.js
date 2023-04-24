import styles from '@/styles/categories.module.css'
import Image from 'next/image'

const Categories = () => {

    return (<>

        <div className={styles.categories}>
            <h2>Select a category to get started</h2>
            <div className={styles.cardgrid}>
                <div className={styles.cards}>
                    <Image src="/images/category1.png" width={144} height={144}>

                    </Image>
                </div>
                <div className={styles.cards}>
                    <Image src="/images/category2.png" width={144} height={144}>

                    </Image>            </div>
                <div className={styles.cards}>
                    <Image src="/images/category3.png" width={144} height={144}>

                    </Image>            </div>
                <div className={styles.cards}>
                    <Image src="/images/category4.png" width={144} height={144}>

                    </Image>
                </div>
            </div>
        </div>
    </>)
}

export default Categories